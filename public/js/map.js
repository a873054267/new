/**
 * Created by Administrator on 2018/3/19.
 */

var scaleLineControl = new ol.control.ScaleLine({
    units: 'metric',
    target: 'scalebar',
    className: 'ol-scale-line'
});
map.addControl(scaleLineControl);
//测量
function  draw(drawType){
    //实例化一个矢量图层Vector作为绘制层
    var vector = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.7)'
            }),
            stroke: new ol.style.Stroke({
                color: '#0099ff',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#0099ff'
                })
            })
        })
    });
    map.addLayer(vector); //将绘制层添加到地图容器中
     var draw = new ol.interaction.Draw({
        source: vector.getSource(), //绘制层数据源
        type: drawType //几何图形类型
    });
    map.addInteraction(draw);
};
