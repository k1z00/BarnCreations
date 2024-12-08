import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import advant  from '../json/аdvantages.json'


interface Advantage {
    id: number;
    title: string;
    text: string;
}

const AdvantagesApp: React.FC = () => {
    const advantArray: Advantage[] = advant; 
    const [visibleParts, setVisibleParts] = useState<Advantage[]>([]); // Указываем тип состояния

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            advantArray.forEach((item, index) => {
                setTimeout(() => {
                    setVisibleParts((prevParts) => [...prevParts, item]);
                }, index *  300); 
            });
        }
    }, [inView, advantArray]);

    return (
        <section ref={ref} className="advantages_container">
            <h1 className="advantages_title">Преимущества</h1>
            <div className="advantages_items">
                {visibleParts.map((item) => (
                    <div key={item.id} className={`advantage-item ${visibleParts.includes(item) ? 'visible' : ''}`}>
                        <h2 className="advantages_items_title">{item.title}</h2>
                        <p className="advantages_items_text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvantagesApp;
