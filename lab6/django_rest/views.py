from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer, CompanySerializer
from .models import Product, Company


# Create your views here.
def index(request):
    return render(request, 'index.html')

# product company

def products(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})


def companys(request):
    companys = Company.objects.all()
    return render(request, 'companys.html', {'companys': companys})


def product(request, id):
    product = Product.objects.get(id=id)
    return render(request, 'product.html', {'product': product})


def company(request, id):
    company = Company.objects.get(id=id)
    return render(request, 'company.html', {'company': company})


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all().order_by("name")
    serializer_class = CompanySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by("name")
    serializer_class = ProductSerializer
