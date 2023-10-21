import hard_code as hc
import pickle
import datetime
from sklearn.svm import SVC
import pandas as pd
import numpy as np


def get_prediction(date, N, P, K, pH, rain, temp):
    good_prods = hc.get_valid(date, temp, pH)
    if (len(good_prods) == 0):
        return "None"
    tot_data = pd.read_csv("tot_data.csv")
    use_data = tot_data[tot_data["product"].isin(good_prods)]

    model = SVC()
    features = ["N", "P", "K", "pH", "Pannual", "Tannual"]
    model.fit(np.array(use_data[features]), np.array(use_data["product"]))

    return model.predict([[N, P, K, pH, rain, temp]])[0]

print(get_prediction(datetime.date(2022, 5, 15), 0,0,0,7,1000,70))
    
