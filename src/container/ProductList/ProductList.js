import React, {Component} from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import classes from "./ProductList.module.css";


class ProductList extends Component{

    state = {
        items: [
            {
                itemMaker: {
                    default: 'Сказочное заморское яство',
                    hover: 'Котэ не одобряет?'
                },
                itemName: 'Нямушка',
                itemStructure: 'с фуа-гра',
                itemDescription: '10 порций мышь в подарок',
                itemWeight: '0,5',
                itemFootText: [
                    {
                        status: 'default',
                    },
                    {
                        status: 'clicked',
                        text: 'Печень утки разварная с артишоками.'
                    },
                    {
                        status: 'disabled',
                    }
                ],
                configurations: {
                    isFirstClicked: true,
                    isFirstHover: true,
                    isHover: false,
                    isClicked: false,
                    status: 'default'
                }
            },    {
                itemMaker: {
                    default: 'Сказочное заморское яство',
                    hover: 'Котэ не одобряет?'
                },
                itemName: 'Нямушка',
                itemStructure: 'с рыбой',
                itemDescription: '40 порций 2 мыши в подарок',
                itemWeight: '2',
                itemFootText: [
                    {
                        status: 'default',
                    },
                    {
                        status: 'clicked',
                        text: 'Головы щучьи с чесноком да свежайшей сёмгушка.'
                    },
                    {
                        status: 'disabled',
                    }
                ],
                configurations: {
                    isFirstClicked: true,
                    isFirstHover: true,
                    isHover: false,
                    isClicked: false,
                    status: 'default'
                }
            },    {
                itemMaker: {
                    default: 'Сказочное заморское яство',
                    hover: 'Котэ не одобряет?'
                },
                itemName: 'Нямушка',
                itemStructure: 'с курой',
                itemDescription: '100 порций 5 мышей в подарок заказчик доволен',
                itemWeight: '5',
                itemFootText: [
                    {
                        status: 'default',
                    },
                    {
                        status: 'clicked',
                        text: 'Филе из цеплят с трюфелями в бульоне.'
                    },
                    {
                        status: 'disabled',
                    }
                ],
                configurations: {
                    isFirstClicked: true,
                    isFirstHover: true,
                    isHover: false,
                    isClicked: false,
                    status: 'disabled'
                }
            }
        ]
    }


    onClickHandler (index, event) {
        event.preventDefault()

        let item = this.state.items[index]
        item.configurations.isClicked = !item.configurations.isClicked

        if (item.configurations.isClicked){
            item.configurations.isFirstClicked = false
        }
        switch (item.configurations.status) {
            case 'default' :
                item.configurations.status = 'clicked'
                break;
            case 'clicked' :
                item.configurations.status = 'default'
                break;
                default: break;
        }
        this.setState({
            item
        })

    }

    onMouseEnter(index) {
        let item = this.state.items[index]

        item.configurations.isHover = true

        this.setState({
            item
        })
    }
    onMouseLeave(index) {
        let item = this.state.items[index]

        item.configurations.isFirstHover = false
        item.configurations.isHover = false

        this.setState({
            item
        })
    }


    render() {
        return (
            <React.Fragment>
                <section>
                    <header className={classes.Header}>
                        <p> Ты сегодня кормил кота? </p>
                    </header>
                    <main>
                        {
                            this.state.items.map( (item, index)=> {
                                return (
                                <ProductItem
                                    key={index + ' ' + item.itemName}
                                    index={index}
                                    itemMaker={item.itemMaker}
                                    itemName={item.itemName}
                                    itemStructure={item.itemStructure}
                                    itemDescription={item.itemDescription}
                                    itemWeight={item.itemWeight}
                                    itemFootText={item.itemFootText}
                                    Config={item.configurations}
                                    onClickHandler={ (event) => this.onClickHandler(index, event)}
                                    onMouseEnter={ () => this.onMouseEnter(index)}
                                    onMouseLeave={ () => this.onMouseLeave(index)}
                                />
                                )
                            })
                        }


                    </main>
                </section>

            </React.Fragment>
        )
    }


}

export default ProductList