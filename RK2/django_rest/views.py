from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer, CompanySerializer
from .models import Product, Company


# Create your views here.
def index(request):
    return render(request, 'index.html')


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all().order_by("name")
    serializer_class = CompanySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by("name")
    serializer_class = ProductSerializer

def report(request):
    return render(request, 'report.html', {'data':{'products':Product.objects.select_related('comp')}})