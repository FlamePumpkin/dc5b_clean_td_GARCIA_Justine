import pandas as pd

fichier = pd.read_csv("test.csv", usecols=[1, 2, 10])
fichier = fichier.dropna()
fichier = fichier[fichier['Series_title_2'].isin(['Credit', 'Debit', 'Services'])]
fichier = fichier.reset_index(drop=True)
fichier.to_csv('importresult.csv', index_label='ID', columns=['Period', 'Data_value', 'Series_title_2'])