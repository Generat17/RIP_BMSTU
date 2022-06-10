from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=30, verbose_name="Названиие")
    brand = models.CharField(max_length=255, verbose_name="Марка")
    price = models.CharField(max_length=255, verbose_name="Цена")

    class Meta:
        managed = False
        db_table = 'product'

class Company(models.Model):
    name = models.CharField(max_length=30, verbose_name="Название")
    address = models.CharField(max_length=255, verbose_name="Адрес")
    phone = models.CharField(max_length=255, verbose_name="Телефон")

    class Meta:
        managed = False
        db_table = 'company'
