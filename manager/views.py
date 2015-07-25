"""Views for manager app."""
import sys
sys.path.append('shared/')

from .models import Option, Order, Product, Rate
from django.http import HttpResponse
from django.shortcuts import render
from lib.views import to_json


def index(request):
    """Load the index front page."""
    return render(request, 'manager/index.html')


def retrieve_orders(request):
    """Return a list of orders."""
    orders = Order.objects.values()
    data = to_json(orders)
    return HttpResponse(data)


def retrieve_products(request):
    """Return a list of products."""
    products = Product.objects.values()
    data = to_json(products)
    return HttpResponse(data)


def retrieve_rates(request):
    """Return a list of rates."""
    rates = Rate.objects.values()
    data = to_json(rates)
    return HttpResponse(data)


def retrieve_options(request):
    """Return a list of options."""
    options = Option.objects.values()
    data = to_json(options)
    return HttpResponse(data)
