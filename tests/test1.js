module.exports = {
  'Verify Promotion applied with Design Session and sufficient value of items in bag' : function (client) {
    var homepage =client.page.home(),
    gallery=client.page.gallery(),
    product=client.page.product(),
    cart=client.page.cart(),
    prom=client.page.promotions();


    homepage.navigate();
    homepage.findHostess('ALLISON KELLMAN');
    gallery.navigatetoProduct('KEY FOB - BLACK/CHESTNUT');
    product.addtoCart('KEY FOB','1');
    product.viewCart('1')
    cart.verifyiteminCart('Key Fob','Black/Chestnut','1');
    cart.updateCart('3','75.00')
    prom.navigate()
    prom.navigatetoProduct('TRIPLE LEATHER BAND - TAN FAUX SUEDE/CHAMPAGNE LEATHER – SILVER')
    product.addtoCart('TRIPLE LEATHER BAND','4')
    product.viewCart('4')
    cart.verifyiteminCart('Triple Leather Band','Tan Faux Suede/Champagne Leather – Silver','4')
    cart.verifypromo('$124.00','$99.50','Exclusive Offer 50% Off','$24.50')
    client.end();
  }
}
