export const pmsData = {
  "user": {
    "name": "Rahul Mehta",
    "account_id": "PMS-KOTAK-482991",
    "last_valuation_date": "2025-01-15"
  },

  "portfolio_summary": {
    "current_value": 15000000,
    "net_contribution": 12200000,
    "net_gain": 2800000,
    "net_gain_percent": 22.95,
    "xirr": 16.0,
    "benchmark": {
      "name": "NIFTY 500 TRI",
      "since_inception_return_percent": 14.2,
      "one_year_return_percent": 18.5,
      "three_year_return_percent": 13.8
    }
  },

  "asset_allocation": {
    "by_asset_class": [
      { "label": "Equity", "percent": 65 },
      { "label": "Debt", "percent": 15 },
      { "label": "Hybrid", "percent": 10 },
      { "label": "Commodities", "percent": 5 },
      { "label": "Cash", "percent": 5 }
    ],
    "by_market_cap": [
      { "label": "Large Cap", "percent": 62 },
      { "label": "Mid Cap", "percent": 28 },
      { "label": "Small Cap", "percent": 10 }
    ],
    "by_sector": [
      { "sector": "Financials", "percent": 32 },
      { "sector": "IT", "percent": 18 },
      { "sector": "Pharma", "percent": 12 },
      { "sector": "Automobile", "percent": 14 },
      { "sector": "Consumer", "percent": 10 },
      { "sector": "Others", "percent": 14 }
    ]
  },

  "holdings": [
    {
      "stock": "HDFC Bank",
      "sector": "Financials",
      "quantity": 1284,
      "avg_buy_price": 1445,
      "current_price": 1660,
      "value": 2131440,
      "gain_loss_percent": 14.9,
      "weight_percent": 14.21
    },
    {
      "stock": "ICICI Bank",
      "sector": "Financials",
      "quantity": 1051,
      "avg_buy_price": 960,
      "current_price": 1125,
      "value": 1182375,
      "gain_loss_percent": 17.2,
      "weight_percent": 7.88
    },
    {
      "stock": "Infosys",
      "sector": "IT",
      "quantity": 875,
      "avg_buy_price": 1390,
      "current_price": 1675,
      "value": 1465625,
      "gain_loss_percent": 20.5,
      "weight_percent": 9.77
    },
    {
      "stock": "TCS",
      "sector": "IT",
      "quantity": 467,
      "avg_buy_price": 3320,
      "current_price": 3825,
      "value": 1786275,
      "gain_loss_percent": 15.2,
      "weight_percent": 11.91
    },
    {
      "stock": "Dr. Reddy's",
      "sector": "Pharma",
      "quantity": 292,
      "avg_buy_price": 5150,
      "current_price": 6070,
      "value": 1772440,
      "gain_loss_percent": 17.9,
      "weight_percent": 11.82
    },
    {
      "stock": "Aurobindo Pharma",
      "sector": "Pharma",
      "quantity": 817,
      "avg_buy_price": 930,
      "current_price": 1025,
      "value": 837425,
      "gain_loss_percent": 10.2,
      "weight_percent": 5.58
    },
    {
      "stock": "Maruti Suzuki",
      "sector": "Automobile",
      "quantity": 175,
      "avg_buy_price": 9300,
      "current_price": 11150,
      "value": 1951250,
      "gain_loss_percent": 19.9,
      "weight_percent": 13.01
    },
    {
      "stock": "Eicher Motors",
      "sector": "Automobile",
      "quantity": 233,
      "avg_buy_price": 3250,
      "current_price": 3940,
      "value": 918020,
      "gain_loss_percent": 21.3,
      "weight_percent": 6.12
    },
    {
      "stock": "Asian Paints",
      "sector": "Consumer",
      "quantity": 408,
      "avg_buy_price": 2850,
      "current_price": 3290,
      "value": 1342320,
      "gain_loss_percent": 15.4,
      "weight_percent": 8.95
    },
    {
      "stock": "Avenue Supermarts (DMart)",
      "sector": "Consumer",
      "quantity": 175,
      "avg_buy_price": 3510,
      "current_price": 4050,
      "value": 708750,
      "gain_loss_percent": 15.4,
      "weight_percent": 4.73
    },
    {
      "stock": "Cash",
      "sector": "Cash",
      "quantity": 0,
      "avg_buy_price": 0,
      "current_price": 1,
      "value": 900000,
      "gain_loss_percent": 0,
      "weight_percent": 6.00
    }
  ],

  "performance_chart": {
    "period": "since_inception_2022",
    "portfolio_values": [
      { "date": "2022-04-01", "value": 5000000 },
      { "date": "2022-10-01", "value": 7900000 },
      { "date": "2023-04-01", "value": 10400000 },
      { "date": "2023-10-01", "value": 12150000 },
      { "date": "2024-04-01", "value": 13800000 },
      { "date": "2024-10-01", "value": 14600000 },
      { "date": "2025-01-15", "value": 15000000 }
    ],
    "benchmark_values": [
      { "date": "2022-04-01", "value": 5000000 },
      { "date": "2022-10-01", "value": 7650000 },
      { "date": "2023-04-01", "value": 9950000 },
      { "date": "2023-10-01", "value": 11500000 },
      { "date": "2024-04-01", "value": 13000000 },
      { "date": "2024-10-01", "value": 13750000 },
      { "date": "2025-01-15", "value": 14100000 }
    ]
  },

  "transactions": [
    { "date": "2022-04-01", "type": "Contribution", "amount": 5000000 },
    { "date": "2022-10-01", "type": "Contribution", "amount": 2500000 },
    { "date": "2023-04-01", "type": "Contribution", "amount": 2000000 },
    { "date": "2023-10-01", "type": "Contribution", "amount": 1500000 },
    { "date": "2024-04-01", "type": "Contribution", "amount": 1200000 }
  ],

  "strategy_info": {
    "strategy_name": "Kotak Focused Equity PMS",
    "objective": "Long-term capital appreciation through concentrated high-quality equity picks.",
    "style": "Growth + Quality",
    "factsheet_url": "https://example.com/kotak_factsheet.pdf",
    "manager_commentary": "Markets delivered strong performance led by financials and auto. Portfolio remains concentrated on high-conviction names with strong earnings visibility."
  },

  "risk_metrics": {
    "beta": 0.87,
    "standard_deviation": 11.2,
    "sharpe_ratio": 1.14,
    "max_drawdown_percent": -8.5,
    "top_5_holdings_concentration_percent": 28.7
  },

  "reports": [
    { "name": "Portfolio Statement", "file": "portfolio_statement.pdf" },
    { "name": "Capital Gains Report", "file": "capital_gains.pdf" },
    { "name": "Contract Notes", "file": "contract_notes.zip" }
  ],

  "support": {
    "rm_name": "Priya Sharma",
    "rm_email": "priya.sharma@kotak.com",
    "rm_phone": "+91 98202 67210"
  },

  "notifications": [
    { "date": "2025-01-12", "message": "Quarterly PMS fee has been charged." },
    { "date": "2025-01-10", "message": "New commentary for December is available." }
  ]
};
