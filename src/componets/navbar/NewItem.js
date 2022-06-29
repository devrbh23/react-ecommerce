import React, {useState} from 'react';

function NewItem() {
  const [item, setItem] = useState({
    newItem: [
      {
        src: require('../Photos/123.jpg'),
      },
    ],
  });
  console.log(item.src);
  return (
    <div>
      <div>
        {item.newItem.map((item) => (
          <img src={item.src} alt="not" />
        ))}
      </div>
    </div>
  );
}
export default NewItem;
