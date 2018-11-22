

module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.addItem = function(item, id){
        var getItemInCart= this.items[id];
        if(!getItemInCart) { // sản phẩm them vào chưa có trong giỏ
            getItemInCart= this.items[id] = {item:item, qty:0, don_gia:0};
        }
        getItemInCart.qty++;
        getItemInCart.don_gia = getItemInCart.item.don_gia * getItemInCart.qty
        this.totalQty++;
        this.totalPrice+= getItemInCart.item.don_gia;
    }

    this.returnArr= function(){
        var arr= [];
        for (var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    }
}