## Checks outcome of calling function with params against expected value
def assert_equal(function, param, expected):
    result = globals()[function](param)
    if debug == True:
        print function+"("+param+"): "+str(result)
    return result == expected

class Checkout:
    def __init__ (self, rules):
        self.rules   = rules
        self.scanned = []
        self.counts  = {}

    def scan(self, item):
        if item in self.counts:
            self.counts[item] += 1
        else:
            self.counts[item]=1
        return item

    def price(self):
        price = 0
        for a in self.counts:
            count = self.counts[a]
            rules = self.rules[a].keys()
            rules.sort(reverse=True)
            for b in rules:
                while count-b >= 0 and count>0:
                    price += self.rules[a][b]
                    count -= b
        return price
        
debug = False
rules = {
    'A': { 1: 50,
           3: 130 },
    'B': { 1: 30,
           2: 45  },
    'C': { 1: 20  },
    'D': { 1: 15  }
}

def price(str):
    checkout = Checkout(rules)
    for a in str:
        total = checkout.scan(a)
    return checkout.price()

print assert_equal('price', ''      , 0)
print assert_equal('price', 'A'     , 50)
print assert_equal('price', 'AB'    , 80)
print assert_equal('price', 'CDBA'  , 115)

print assert_equal('price', 'AA'    ,100)
print assert_equal('price', 'AAA'   ,130)
print assert_equal('price', 'AAAA'  ,180)
print assert_equal('price', 'AAAAA' ,230)
print assert_equal('price', 'AAAAAA',260)

print assert_equal('price', 'AAAB'  ,160)
print assert_equal('price', 'AAABB' ,175)
print assert_equal('price', 'AAABBD',190)
print assert_equal('price', 'DABABA',190)
