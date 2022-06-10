from lab_python_oop.rectangle import Rectangle
from lab_python_oop.circle import Circle
from lab_python_oop.square import Square
from pip._vendor.colorama import Fore, Back, Style, init


def main():
    r = Rectangle("синего", 3, 2)
    c = Circle("зеленого", 5)
    s = Square("красного", 5)
    init()
    print(Fore.BLUE, r)
    print(Fore.GREEN, c)
    print(Fore.RED, s)
    input()

if __name__ == "__main__":
    main()