# change to the public/js dir
cd public/js

# add checksum to main.js
md5sum main.js | awk '{ print $1 }' > main.js.checksum.txt
md5sum register.js | awk '{ print $1 }' > register.js.checksum.txt
md5sum search.js | awk '{ print $1 }' > search.js.checksum.txt
md5sum trial.js | awk '{ print $1 }' > trial.js.checksum.txt
md5sum api-gateway-cost-calculator.js | awk '{ print $1 }' > api-gateway-cost-calculator.js.checksum.txt
md5sum cost-calculator.js | awk '{ print $1 }' > cost-calculator.js.checksum.txt

main_js_checksum=$(cat main.js.checksum.txt)
register_js_checksum=$(cat register.js.checksum.txt)
search_js_checksum=$(cat search.js.checksum.txt)
trial_js_checksum=$(cat trial.js.checksum.txt)
api_gateway_cost_calculator_js_checksum=$(cat api-gateway-cost-calculator.js.checksum.txt)
cost_calculator_js_checksum=$(cat cost-calculator.js.checksum.txt)

cd ..

sed -i "s/main.js/main.js?v=$main_js_checksum/g" index.html
sed -i "s/register.js/register.js?v=$register_js_checksum/g" index.html
sed -i "s/search.js/search.js?v=$search_js_checksum/g" index.html
sed -i "s/trial.js/trial.js?v=$trial_js_checksum/g" index.html
sed -i "s/api-gateway-cost-calculator.js/api-gateway-cost-calculator.js?v=$api_gateway_cost_calculator_js_checksum/g" index.html
sed -i "s/cost-calculator.js/cost-calculator.js?v=$cost_calculator_js_checksum/g" index.html

cd ./js

rm main.js.checksum.txt
rm register.js.checksum.txt
rm search.js.checksum.txt
rm trial.js.checksum.txt
rm api-gateway-cost-calculator.js.checksum.txt
rm cost-calculator.js.checksum.txt

cd ../..