import styles from './index.module.scss';
import { Title } from 'src/components';
import { Icon } from 'src/components/icon';
import { useState, useEffect } from 'react';

export interface ToDoListProps {

}

export const ToDoList:React.FC<ToDoListProps> = () => {
    const [items, setItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);
    const [itemEditing, setItemEditing] = useState('');

    // Upon component mount, get items from local storage
    useEffect(() => {
        const json = localStorage.getItem("items");
        const savedItems = JSON.parse(json);

        const jsonCompletedItems = localStorage.getItem("completedItems");
        const savedCompletedItems = JSON.parse(jsonCompletedItems);

        if (savedItems) {
            setItems(savedItems);
        }

        if (savedCompletedItems) {
            setCompletedItems(savedCompletedItems);
        }
    }, []);

    // When updating the todo list, save to local storage
    useEffect(() => {
        const json = JSON.stringify(items);
        localStorage.setItem("items", json);
    }, [items]);

    // When updating completed items, save to local storage
    useEffect(() => {
        const json = JSON.stringify(completedItems);
        localStorage.setItem("completedItems", json);
    }, [completedItems]);

    const addItem = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.random().toString().substr(2, 9),
            name: e.target.item.value,
        }
        e.target.item.value = '';
        setItems([newItem, ...items]);
    }

    const completeItem = (id) => {
        const filteredItems = items.filter(item => {
            if (item.id !== id) { 
                return item;
            } else {
                setCompletedItems([item, ...completedItems])
            }
        });
        setItems(filteredItems);
    }

    const editItems = (e, id) => {
        e.preventDefault();
        const editedItems = items.map(item => {
            if (item.id === id) {
                return {
                    id: item.id,
                    name: e.target.editedItem.value,
                }
            } else {
                return item;
            }
        });
        setItems(editedItems);
        setItemEditing('');
    }

    return (
        <div className={styles.ToDoList_wrapper}>
            <Title
                size={4}
                weight="400"
                spacing={5}
            >
                To-Do List
            </Title>
            <form className={styles.ToDoList_form_add} onSubmit={addItem}>
                <input className={styles.ToDoList_form_input} type="text" name="item" placeholder="Add an item..." />
                <button type="submit" className={styles.ToDoList_form_submitBtn}>Add</button>
            </form>
            <div className={styles.ToDoList_items}>
                {items.map((item) => (
                    <div key={item.id} className={styles.ToDoList_item}>
                        <div 
                            className={styles.ToDoList_item_completeBtn} 
                            onClick={() => completeItem(item.id)}
                        ></div>
                        {itemEditing === item.id ?
                            <form className={styles.ToDoList_form_edit} onSubmit={(e) => editItems(e, item.id)}>
                                <input className={styles.ToDoList_form_input} name="editedItem" defaultValue={item.name} />
                                <button type="submit">Save</button>
                                <button>Cancel</button>
                            </form> :
                            <div className={styles.ToDoList_item_name} onClick={() => setItemEditing(item.id)}>
                                {item.name}
                            </div>
                        }
                    </div>
                ))}
                <div className={styles.ToDoList_completedItems}>
                    <Title
                        size={3}
                        alignment="left"
                        weight="400"
                    >
                        Completed Items
                    </Title>
                </div>
                {completedItems.map(completedItem => (
                    <div key={completedItem.id}>{completedItem.name}</div>
                ))

                }
            </div>
        </div>
    )
}