import math
import sys

def getNumber(name) :
 while True:
  x = input(name + " = ")
  if x.isdigit() :
   return float(x)

if len(sys.argv) == 4:
 a = float(sys.argv[1])
 b = float(sys.argv[2])
 c = float(sys.argv[3])
else:
 a = getNumber('a')
 b = getNumber('b')
 c = getNumber('c')
 
discr = b ** 2 - 4 * a * c
print("Дискриминант D = %.2f" % discr)
 
if discr > 0:
 x1 = (-b + math.sqrt(discr)) / (2 * a)
 x2 = (-b - math.sqrt(discr)) / (2 * a)
 print("x1 = %.2f \nx2 = %.2f" % (x1, x2))
elif discr == 0:
 x = -b / (2 * a)
 print("x = %.2f" % x)
else:
 print("Корней нет")

input()