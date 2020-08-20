import React from "react";
import classes from './ProductItem.module.css'
import cat from '../../components/img/cat.png';

const ProductItem = props => {

    const footTextHandler = () => {

        const clickedText = () => {
            let text
            props.itemFootText.forEach( item => {
                if (item.status === 'clicked') {
                     text = item.text
                }
            })
            return text
        }

        switch (props.Config.status) {
            case 'default': return (
                <div className={classes.footText}>
                    Чего сидишь? Порадуй котэ,
                    <a href='/#' onClick={event => props.onClickHandler(event)}>купи.</a>
                </div>
            )
            case 'clicked' : return (
                <div className={classes.footText}>
                    {clickedText()}
                </div>
            )
            case 'disabled' : return (
                <div className={classes.footText} style={{
                    color: '#FFFF66'
                }}>
                    {`Печалька, ${props.itemStructure} закончился.`}
                </div>
            )

            default: return null

        }
    }

    const borderColorChange = (defaultClass) => {
        let clsItem = [defaultClass]

        if (props.Config.isClicked){
            clsItem.push(classes.clicked)
        }
        if (props.Config.status === 'disabled'){
            clsItem.push(classes.disabled)
        }

        return clsItem.join(' ')
    }

    const itemMakerChange = () => {

        if (props.Config.isHover && props.Config.isClicked
            && !props.Config.isFirstHover && !props.Config.isFirstClicked){
            return <div className={classes.itemMaker + ' ' + classes.hover} >{props.itemMaker.hover}</div>
        } else {
            return <div className={classes.itemMaker} >{props.itemMaker.default}</div>
        }
    }

    const disabledClass = () => {
        if (props.Config.status === 'disabled'){
            return classes.disabled
        } else {
            return null
        }
    }


    return (
        <div className={borderColorChange(classes.item)}>

            <main className={disabledClass()}  onClick={event => props.onClickHandler(event)} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                <div className={disabledClass()}></div>
                <header>
                    {itemMakerChange()}
                    <div className={classes.itemName+ ' ' +disabledClass()}>{props.itemName}</div>
                    <div className={classes.itemStructure+ ' ' +disabledClass()}>{props.itemStructure}</div>
                    <div className={classes.itemDescription}> {props.itemDescription}</div>
                </header>
                {/*<div className={classes.imgPosition}>*/}
                    <img src={cat} alt="cat"/>
                {/*</div>*/}
                <div className={borderColorChange(classes.itemWeight) }>
                    <div className={classes['itemWeight-value']}>{props.itemWeight}</div>
                    <div className={classes['itemWeight-dimension']}>кг</div>
                </div>
            </main>
            <footer>

                {footTextHandler()}
            </footer>
        </div>
    )
}

export default ProductItem