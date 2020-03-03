$(function(){
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    $btnCal.click(function(){
        var w= Number($width.val()),
            h=Number($height.val());
            var p=(roundFractional(2*(w+h),2)),
            a=roundFractional(w*h,2);
            console.log(p,a);
            $perimeter.val(p);
            $area.val(a);
    });
});