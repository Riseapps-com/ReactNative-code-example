import {OrderedMap} from 'immutable'

export enum ImgName {
    LogoPrimary = 'logo_primary',
    LogoWhite = 'logo_white',
    Flag = 'flag',
    Region = 'region',
    Africa = 'africa',
    Americas = 'americas',
    Asia = 'asia',
    Europe = 'europe',
    Oceania = 'oceania',
    BackArrow = 'back_arrow'
}

const imgs: OrderedMap<String, any> = OrderedMap({
        [ImgName.LogoPrimary]: require('./logo_primary.png'),
        [ImgName.LogoWhite]: require('./logo_white.png'),
        [ImgName.Flag]: require('./flag.png'),
        [ImgName.Region]: require('./region.png'),
        [ImgName.Africa]: require('./africa.png'),
        [ImgName.Americas]: require('./america.png'),
        [ImgName.Asia]: require('./asia.png'),
        [ImgName.Europe]: require('./europe.png'),
        [ImgName.Oceania]: require('./oceania.png'),
        [ImgName.BackArrow]: require('./back_arrow.png')
    }
)

const getImgByName = (imgName: ImgName): number => imgs.get(imgName)

export default getImgByName