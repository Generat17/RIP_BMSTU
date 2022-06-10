from __future__ import print_function

goods = [
	{'title': 'Ковер', 'price': 2000, 'color': 'green'},
	{'title': 'Диван для отдыха', 'price': 5300, 'color': 'black'}
]

def field(items, *args):
    #assert len(args) > 0
    
	if len(args) == 1:
		for x in items:
			print('\'' + x.get(args[0]) + '\',', end=' ')
	if len(args) > 1:
		for x in items:
			print (end='{')
			for y in args:
				print('\'' + y + '\': \'' + str(x.get(y)) + '\',', end='')
			print (end='}, ')	


field (goods, 'title', 'price')