# Здесь должна быть реализация декоратора
def print_result(func):
    def wrapper():
        #something до функции
        print("\n")
        print ('название функции: ', func.__name__)
        result = func()
        print (result)
        #something после функции
        if isinstance(result, (dict)):
            for x in result:
                print(x, '=', result.get(x))
        if isinstance(result, (list)):
            for x in result:
                print (x)
        return result
    return wrapper


@print_result
def test_1():
    return 1


@print_result
def test_2():
    return 'iu5'


@print_result
def test_3():
    return {'a': 1, 'b': 2}


@print_result
def test_4():
    return [1, 2]

test_1()
test_2()
test_3()
test_4()