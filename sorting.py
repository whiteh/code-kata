## Sorting balls
class Rack:
  def __init__(self):
    self.balls = []

  def getPosition(self, item):
    for a in list(range(len(self.balls))):
      if (self.balls[a]>=item):
        return a
    return len(self.balls)

  def add(self, item):
    pos = self.getPosition(item)
    self.balls.insert(pos, item)


def assert_equal(a, b):
  print(a == b)

def testBalls():
  rack = Rack()
  assert_equal([], rack.balls)
  rack.add(20)
  assert_equal([20], rack.balls)
  rack.add(10)
  assert_equal([10, 20], rack.balls)
  rack.add(30)
  assert_equal([10,20,30], rack.balls)

  ## Sorting characters
def printChar(chars):
  result = ""
  for a in [ chr(i) for i in range(97, 123) ]:
    for b in range(0, chars[a]):
      result += a
  return result

def charsort(s):
  chars = {chr(i): 0 for i in range(97, 123)}
  for a in s.lower():
    if a in chars:
      chars[a]+=1
  return printChar(chars)

def testChars():
  c = charsort("When not studying nuclear physics, Bambi likes to play\nbeach volleyball.")
  print c
  assert_equal(c, "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy")

  
## Run tests
if __name__ == "__main__":
  testBalls()
  testChars()