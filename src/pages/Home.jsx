import React from 'react';

function Home() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">ברוך הבא ל-Travelia</h2>
      <p>מצא את הטיסה או החופשה המושלמת עבורך</p>
      <iframe src="https://www.travelpayouts.com/widgets/0c8ad4b03dafea0bbd3e9df241a2c105" width="100%" height="400" frameBorder="0"></iframe>
    </section>
  );
}

export default Home;