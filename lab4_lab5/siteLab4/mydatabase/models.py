from django.db import models

class Books(models.Model):
    name = models.CharField(max_length=30)
    dicription = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'books'

class Product(models.Model):
    name = models.CharField(max_length=30)
    brand = models.CharField(max_length=255)
    price = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'product'

class Company(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'company'
