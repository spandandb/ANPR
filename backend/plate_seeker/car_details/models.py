from django.db import models

class CarDetail(models.Model):
    file_name = models.CharField(max_length=25)
    number = models.CharField(max_length=100)
    x_min = models.IntegerField()
    y_min = models.IntegerField()
    x_max = models.IntegerField()
    y_max = models.IntegerField()
    owner = models.CharField(max_length=100)
    address = models.TextField()
    car_type = models.CharField(max_length=100)
    purchase_date = models.CharField(max_length=50)
    number_of_owners = models.IntegerField()
    accident_history = models.CharField(max_length=5)
    reason = models.CharField(max_length=100)
    km_reading = models.IntegerField()
