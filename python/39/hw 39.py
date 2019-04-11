#def days_in_month(months, days):
#     for month,day in zip(months, days):
#      print(month,'has',day,' days')


#days_in_month(months=['January','February','March','April','May',
#'June','July','August','September','October','November','December'],
#days=[31,28,31,30,31,30,31,31,30,31,30,31])

#days_in_month(months=('January','February','March','April','May',
#'June','July','August','September','October','November','December'),
#days=(31,28,31,30,31,30,31,31,30,31,30,31))#runs only without packing tuple????


def days_in_month2(**months_days):#not sure how to do this one
     for  v in months_days.values():
           print(v)


days_in_month2(
      months_days={'months':('January','February','March','April','May',
'June','July','August','September','October','November','December'),
'days_in_month':(31,28,31,30,31,30,31,31,30,31,30,31)
} ) 

def days_in_month3(month):
 if month == 'January':
  return 31
 elif month=='February':
  return 28
 elif month=='March':
  return 31
 elif month=='April':
  return 30
 elif month=='May':
  return 31
 elif month=='June':
  return 30
 elif month=='July':
  return 31
 elif month=='August':
  return 31
 elif month=='September':
  return 30
 elif month=='October':
  return 31
 elif month=='November':
  return 30
 else:
      return 31

print(days_in_month3('November'))  

class Bank_Account:#not running,says TypeError: Bank_Account() takes no arguments
      account_id = 0

def __init__(self,name, account_num,balance):
           self.name = name
           self.account_num = account_num
           self.balance = balance
           account_id +=1

def get_name(self):
            return self.name

def set_name(self,name):
            self.name = name

def get_account_num(self):
            return self.account_num

def set_account_num(self,account_num):
            self.account_num = account_num

def get_balance(self):
            return self.balance

def set_balance(self,balance):
            self.balance = balance


@classmethod
def get_account_id(account_id):
            return account_id


account = Bank_Account('david',123,123.00)
print(account)