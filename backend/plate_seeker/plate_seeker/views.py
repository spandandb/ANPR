from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
import os
import numpy
import cv2
import numpy as np
import pytesseract
from tkinter import *
import base64

def get_number_plate(file):
    # command to run the pytesseract in order to convert the image text into python string
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

    # linking the haar cascade
    cascade = cv2.CascadeClassifier(os.path.join(settings.BASE_DIR, "cascade\haar_cascade.xml"))

    # reading the input image
    # img = cv2.imread("Photos\cars5.jpg")
    img = cv2.imdecode(numpy.fromstring(file.read(), numpy.uint8), cv2.IMREAD_UNCHANGED)

    # so that the program does not proceed until any keyboard key is pressed
    cv2.waitKey(0)

    # displaying the original image
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # -- Detect Number plates
    plates = cascade.detectMultiScale(
        gray, scaleFactor=1.05, minNeighbors=7,
        minSize=(50, 50), flags=cv2.CASCADE_SCALE_IMAGE
    )

    # iterate through each detected number plates
    for (x, y, w, h) in plates:

        # draw bounding box
        cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

        # Crop the numberplate
        plateROI = gray[y:y+h, x:x+w]

        kernel = np.ones((1, 1), np.uint8)
        plateROI = cv2.dilate(plateROI, kernel, iterations=1)
        plateROI = cv2.erode(plateROI, kernel, iterations=1)

    # using thresholding technique to convert it into a binary image
    (thresh, plate) = cv2.threshold(plateROI, 127, 255, cv2.THRESH_BINARY_INV)

    # Convert captured image to JPG
    retval, buffer = cv2.imencode('.jpg', plate)

    # Convert to base64 encoding and show start of data
    jpg_as_text = base64.b64encode(buffer)

    # read the text on the plate
    read = pytesseract.image_to_string(plate, lang='eng')
    read = ''.join(e for e in read if e.isalnum())
    # print(read)

    # outlining the detected number plate on the original image

    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 4)
    cv2.putText(img, read, (x, y-5), cv2.FONT_HERSHEY_COMPLEX, 0.8, (0, 255, 0), 2)
    return jpg_as_text


@api_view(['POST'])
def get_details(request):
    return Response({"image": get_number_plate(request.FILES['image'])})
