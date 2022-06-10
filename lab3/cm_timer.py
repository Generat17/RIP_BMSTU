import time
import contextlib

#Timer 1
class cm_timer_1:
    def __enter__(self):
        self.start = time.time()

    def __exit__(self, *args):
        self.end = time.time()
        self.interval = self.end - self.start
        print("time: %0.3f" % (self.interval))
        return False

#Timer 2
@contextlib.contextmanager
def cm_timer_2():
  start = time.time()
  yield
  end = time.time()
  print('time: {:.3f}'.format(end - start))

with cm_timer_1():
    time.sleep(4.5)

with cm_timer_2():
    time.sleep(3.4)
