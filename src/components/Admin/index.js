import React from 'react'
import "./style.css"
const Admin = () => {
    return (
        <div className="container">
        <div className="row custom-nav">
          <div className="col-md-3 aa">
            <div className="h-left-con">
            </div>
          </div>
          <div className="col-md-7 aa">
            <div className="h-center-con">
              <div className="col-md-4">
                <i className="fa fa-search" /><input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="col-md-2 aa">
            <div className="h-right-con">
              <ul>
                <li>
                  <i className="fa fa-th" style={{color: '#d9696a'}} />
                </li>
                <li>
                  <i className="fa fa-bar-chart-o" style={{color: '#666'}} />
                </li>
                <li>
                  <i className="fa fa-bell-o" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row bottom-nav">
          <div className="col-md-12">
            <div className="nav-con">
              <ul>
                <li>
                  <i className="fa fa-users" />
                  <h4>MEMBERS</h4>
                </li>
                <li>
                  <i className="fa fa-truck" />
                  <h4>PRODUCT</h4>
                </li>
                <li>
                  <i className="fa fa-umbrella" />
                  <h4>ORDER</h4>
                </li>
                <li>
                  <i className="fa fa-shopping-cart" />
                  <h4>SHOPPING</h4>
                </li>
                <li>
                  <i className="fa fa-gears" />
                  <h4>SETTING</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row quick-bar">
          <div className="col-md-2">
            <input type="text" placeholder="Üye adı, Numarası" /> <div className="search-btn">Ara</div>
          </div>
          <div className="col-md-2">
          </div> 
        </div>
        <div className="row content">
          <div className="col-md-12">
            <table className="table table-bordered no-more-tables">
              <thead>
                <tr>
                  <th className="text-center" width="5%">ISLEM TARİHİ</th>
                  <th className="text-center" width="12%">BAŞLANGIC VE BITIS TARİHİ</th>
                  <th className="text-center" width="8%">ÜYELİK TİPİ</th>
                  <th className="text-center" width="7%">ÖDENEN MİKTAR</th>
                  <th className="text-center" width="7%">KALAN MİKTAR</th>
                  <th className="text-center" width="4%">Graph</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">January</td>
                  <td className="text-center">$ 50,000.00</td>
                  <td className="text-center">$ 50,000.00</td>
                  <td className="text-center">$ 50,000.00</td>
                  <td className="text-center">
                    <div className="sparklines" sparktype="bar" sparkbarcolor="#0aa699" values="4,5,6,3,6,4,1" />
                  </td>
                  <td className="text-center">
                    <div className="sparklines" sparktype="bar" sparkbarcolor="#0aa699" values="4,5,6,3,6,4,1" />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">January</td>
                  <td className="text-center">$ 50,000.00</td>
                  <td className="text-center">$ 50,000.00</td>
                  <td className="text-center">$ 50,000.00</td>
                  <td className="text-center">
                    <div className="sparklines" sparktype="bar" sparkbarcolor="#0aa699" values="4,5,6,3,6,4,1" />
                  </td>
                  <td className="text-center">
                    <div className="sparklines" sparktype="bar" sparkbarcolor="#0aa699" values="4,5,6,3,6,4,1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default Admin



