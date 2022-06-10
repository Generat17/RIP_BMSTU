from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django_rest.views import CompanyViewSet, ProductViewSet
import django_rest.views

router = routers.DefaultRouter()
router.register(r'Company', CompanyViewSet)
router.register(r'Product', ProductViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('report/', django_rest.views.report),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
