# aframe-arjs-delayed-marker
 A proximity detector component for Aframe that triggers an event when the distance between two entities is the established

## Usage
```html
<a-marker delayed-marker="time:1000">
...
</a-marker>
```

| Property | Description | Default |
| :------------ |:---------------| -----:|
| time | time in microseconds to keep the element rendering after marker is lost, then entity is visually remove from scene | 250 |