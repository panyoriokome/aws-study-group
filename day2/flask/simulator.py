import datetime
from dateutil import relativedelta

def simulate_monthly_investment(amount_in_month, duration, annual_return):

    # 月複利で計算するため、期間、金額、利率を月あたりに変換する
    MONTHS_IN_YEAR = 12
    annual_return_in_percentage = annual_return / 100
    monthly_return_in_percentage = annual_return_in_percentage / MONTHS_IN_YEAR

    balance_by_year_ts = []

    # 投資期間だけの運用を考える
    present_balance = 0
    
    today = datetime.datetime.today()
    date = today
    balance_by_month_ts = []
    balance_by_month_ts.append(present_balance)

    for year in range(duration):
        
        balance_by_month_ts = []
        for month in range(MONTHS_IN_YEAR):
            present_balance = (present_balance *  (1 + monthly_return_in_percentage)) + \
                amount_in_month
            balance_by_month_ts.append(present_balance)

        date = date + relativedelta.relativedelta(years=1)
        balance_by_year_ts.append({
            'date': date.strftime('%Y/%m/%d'),
            'value': int(present_balance)
        })

    return balance_by_year_ts