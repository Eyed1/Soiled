#File to check if date/temperature/pH even suitable.
import datetime

def good_corn(date, temp, pH):
    if date.month < 5 or date.month > 6 or (date.month == 6 and date.day > 15):
        return False
    if temp<50 or temp > 91:
        return False
    if pH < 5.6 or pH > 7.8:
        return False
    return True

def good_rice(date, temp, pH):
    if date.month < 3 or date.month > 5 or (date.month == 5 and date.day > 10) or (date.month == 3 and date.day < 15):
        return False
    if temp < 65 or temp > 83:
        return False
    if pH < 5 or pH > 7.5:
        return False
    return True

def good_wheat(date, temp, pH):
    if (date.month == 2 or (date.month == 1 and date.day >= 15) or (date.month == 3 and date.day <= 15)):
        return False
    if (date.month == 7 or date.month == 8 or (date.month == 6 and date.day >= 15)):
        return False
    if temp < 40 or temp > 95:
        return False
    if pH < 5.5 or pH > 7.5:
        return False
    return True

def good_cotton(date, temp, pH):
    if (date.month < 2 or date.month > 6 or (date.month == 2 and date.day <= 15) or (date.month == 6 and date.day >= 15)):
        return False
    if temp < 64 or temp > 100:
        return False
    if pH < 5.8 or pH > 8:
        return False
    return True

def good_soy(date, temp, pH):
    if (date.month < 4 or date.month > 7 or (date.month == 4 and date.day <= 15) or (date.month == 7 and date.day >= 15)):
        return False
    if temp < 50 or temp > 86:
        return False
    if pH < 6.0 or pH > 7.0:
        return False

def check_good(date, temp, pH, product):
    if product == "corn":
        return good_corn(date, temp, pH)
    if product == "rice":
        return good_rice(date, temp, pH)
    if product == "wheat":
        return good_wheat(date, temp, pH)
    if product == "cotton":
        return good_cotton(date, temp, pH)
    if product == "soy":
        return good_soy(date, temp, pH)
    return True

def get_valid(date, temp, pH):
    ret = []
    if good_corn(date, temp, pH):
        ret.append("corn")
    if good_rice(date, temp, pH):
        ret.append("rice")
    if good_wheat(date, temp, pH):
        ret.append("wheat")
    if good_soy(date, temp, pH):
        ret.append("soy")
    if good_cotton(date, temp, pH):
        ret.append("cotton")
    return ret













