"""Views for orders app."""
import sys
sys.path.append('shared/')

from manager.models import Option, Order, Product, Rate
from django.http import HttpResponse
from django.shortcuts import render
from lib.views import to_json


def index(request):
    """Load the index front page."""
    return render(request, 'orders/index.html')


def retrieve_product_types(request):
    """Return a list of all product types."""
    types = Product.objects.filter(active=True).values('type').distinct()
    data = to_json(types)
    return HttpResponse(data)


def retrieve_active_products(request):
    """Return a list of active products."""
    products = Product.objects.filter(active=True).values()
    data = to_json(products)
    return HttpResponse(data)


def retrieve_active_options(request):
    """Return a list of active products."""
    options = Option.objects.filter(active=True).values()
    data = to_json(options)
    return HttpResponse(data)
