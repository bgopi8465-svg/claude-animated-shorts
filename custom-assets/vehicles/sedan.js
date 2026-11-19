// Reusable procedural Three.js Sedan asset
// This file will be developed into a complete car model.

export function createSedan(THREE) {
  const car = new THREE.Group();

  // Temporary placeholder
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2, 0.6, 4),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );

  car.add(body);

  return car;
}
