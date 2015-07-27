from django.contrib import admin

from .models import Option, Order, OrdLine, Product, Rate, Setting


class OptionAdmin(admin.ModelAdmin):
    list_display = ['name', 'tag', 'price']


class ProductAdmin(admin.ModelAdmin):
    list_display = ['prod_num', 'type', 'name', 'price', 'sub_options']


class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_num', 'total', 'tax', 'date']


class RateAdmin(admin.ModelAdmin):
    list_display = ['sales_tax', 'donation']


admin.site.register(Option, OptionAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrdLine)
admin.site.register(Rate, RateAdmin)
admin.site.register(Setting)
