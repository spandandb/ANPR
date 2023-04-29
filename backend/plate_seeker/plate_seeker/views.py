from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def get_details(request):
    print(request.data['image'])
    return Response({"message": "Hello, world!"})