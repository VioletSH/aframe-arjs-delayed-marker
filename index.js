AFRAME.registerComponent("delayed-marker", {
    schema: {
      time: { type: "number", default: 250 }
    },
    init: function() {
        var time = this.data.time;
        console.log(time)
        this.el.addEventListener("markerLost", function() {
            this.object3D.visible = true;
            setTimeout(() => {
            this.object3D.visible = false;
            }, time);
        });
    }
});
