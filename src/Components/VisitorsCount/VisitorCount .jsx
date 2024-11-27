// VisitorCount.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/visitor');
        console.log(response.data.count);
        
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div>
      <p>Visitor Count: {count}</p>
    </div>
  );
};

export default VisitorCount;
