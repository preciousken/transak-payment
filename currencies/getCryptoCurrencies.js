var axios = require('axios');
const configData = require("../config")

const getCryptoCurrencies = async (req,res) => {
    var config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `${configData.API_URL}/api/v2/currencies/crypto-currencies?ipAddress=${configData.YOUR_IP_ADDRESS}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
          
        return res.status(200).json({
            code:0,
            data: response.data,
            message:""
        });
      })
      .catch(function (error) {
        console.log(error);
        return res.status(500).json({
            code:1,
            data: null,
            message:error
        });
      });
      
}

module.exports = {getCryptoCurrencies}