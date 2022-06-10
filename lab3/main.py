import json
import gen_random

import cm_timer


# Декоратор
def print_result(func):
    def wrapper(arg):
        print("\n")
        print('название функции: ', func.__name__)
        result = func(arg)
        print(result)
        if isinstance(result, (dict)):
            for x in result:
                print(x, '=', result.get(x))
        if isinstance(result, (list)):
            for x in result:
                print(x)
        return result

    return wrapper
# Декоратор


path = 'data.json'

with open(path, encoding='utf-8') as f:
    data = json.load(f)

# Функция f1 должна вывести отсортированный список профессий без повторений
# (строки в разном регистре считать равными). Сортировка должна игнорировать регистр.
@print_result
def f1(arg):
    my_list = list()
    for i in arg:
        my_list.append(i['job-name'])
    my_list = [item.lower() for item in my_list]
    seen = {}
    my_list = [seen.setdefault(x, x) for x in my_list if x not in seen]
    my_list = sorted(my_list)
    return my_list

# Функция f2 должна фильтровать входной массив и возвращать только те элементы,
# которые начинаются со слова “программист”. Для фильтрации используйте функцию filter
@print_result
def f2(arg):
    return [name for name in arg if name.startswith("программист")]


# Функция f3 должна модифицировать каждый элемент массива, добавив строку “с опытом Python”
# (все программисты должны быть знакомы с Python). Пример: Программист C# с опытом Python.
@print_result
def f3(arg):
    return list(map(lambda x: x + (' с опытом Python'), arg))

# Функция f4 должна сгенерировать для каждой специальности зарплату от 100 000 до 200 000 рублей и присоединить её к
# названию специальности. Пример: Программист C# с опытом Python, зарплата 137287 руб. Используйте zip для обработки
# пары специальность — зарплата.
@print_result
def f4(arg):
    rand_list = gen_random.gen_random(len(arg), 100000, 200000)
    zip_obj = zip(arg, rand_list)
    for i in zip_obj: print(i[0], ', зарплата ', i[1])
    return -1


if __name__ == '__main__':
    with cm_timer.cm_timer_1():
        f4(f3(f2(f1(data))))
