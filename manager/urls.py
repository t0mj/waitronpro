from django.conf.urls import patterns, url


urlpatterns = patterns(
    'manager.views',
    url(r'^$', 'index'),
    url(r'^api/retrieveProducts$', 'retrieve_products'),
    url(r'^api/retrieveOrders$', 'retrieve_orders'),
    url(r'^api/retrieveRates$', 'retrieve_rates'),
    url(r'^api/retrieveOptions$', 'retrieve_options'),
)
