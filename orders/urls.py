from django.conf.urls import patterns, url


urlpatterns = patterns(
    'orders.views',
    url(r'^$', 'index'),
    url(r'^api/retrieveProductTypes$', 'retrieve_product_types'),
    url(r'^api/retrieveActiveProducts$', 'retrieve_active_products'),
    url(r'^api/retrieveActiveOptions$', 'retrieve_active_options'),
)
