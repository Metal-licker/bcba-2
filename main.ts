namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile80`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile76`, function (sprite, location) {
    game.showLongText("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", DialogLayout.Center)
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    game.showLongText("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", DialogLayout.Center)
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 f f f f f f f f f f f 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 f f f f f f f f f f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
    game.showLongText("wait the fuck are you doing here ", DialogLayout.Bottom)
    game.showLongText("I didn't think you would get past the death claws ", DialogLayout.Bottom)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        . f f f f f f f f f f f f f . 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        . f f f f f f f f f f f f f . 
        `)
    game.showLongText("what", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 f f f f f f f f f f f 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 f f f f f f f f f f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
    game.showLongText("the big lizards with like a humanoid body?", DialogLayout.Bottom)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        . f f f f f f f f f f f f f . 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        . f f f f f f f f f f f f f . 
        `)
    game.showLongText("???", DialogLayout.Top)
    game.showLongText("there were nun ", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 f f f f f f f f f f f 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 f f f f f f f f f f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
    game.showLongText("what ", DialogLayout.Bottom)
    game.showLongText("ok then ", DialogLayout.Bottom)
    game.showLongText("don't go any further ok ", DialogLayout.Bottom)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        . f f f f f f f f f f f f f . 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        . f f f f f f f f f f f f f . 
        `)
    game.showLongText("nah im going to blow this place down ", DialogLayout.Top)
    game.showLongText("un less you let me go back to Hamish's room ", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 f f f f f f f f f f f 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 f f f f f f f f f f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
    game.showLongText("ha you can try ", DialogLayout.Bottom)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        . f f f f f f f f f f f f f . 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        . f f f f f f f f f f f f f . 
        `)
    game.showLongText("ok i will using my pip boy to teleport and my bomb to well kaboom", DialogLayout.Top)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 f f f f f f f f f f f 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 f f f f f f f f f f f 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
    game.showLongText("wait you really do have a bomb", DialogLayout.Bottom)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        . f f f f f f f f f f f f f . 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        . f f f f f f f f f f f f f . 
        `)
    game.showLongText("yep", DialogLayout.Top)
    game.showLongText("you teleport to the core of noah's lab ", DialogLayout.Full)
    current_level += 1
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(45)) {
        game.showLongText("even harder mode ", DialogLayout.Bottom)
        info.setLife(1)
        info.startCountdown(100)
    } else {
        game.showLongText("hard mode ", DialogLayout.Bottom)
        info.setLife(2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile114`, function (sprite, location) {
    game.showLongText("yes I'm safe now", DialogLayout.Top)
    game.showLongText("prrrrrrrrr", DialogLayout.Top)
    game.showLongText("final ending ", DialogLayout.Full)
    game.showLongText(".", DialogLayout.Full)
    game.showLongText("..", DialogLayout.Full)
    game.showLongText(".", DialogLayout.Full)
    game.showLongText("thx for playing      creator Hamish  if you haven't checked out the first game I highly recommend it  ", DialogLayout.Full)
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile67`, function (sprite, location) {
    current_level += 7
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    current_level += 1
    startLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile31`, function (sprite, location) {
    if (Math.percentChance(45)) {
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        game.showLongText(":password=", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("hummmmmmmmmmm", DialogLayout.Top)
        game.showLongText("oh I know ", DialogLayout.Top)
        game.showLongText("types in STARchild&$*", DialogLayout.Full)
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        game.showLongText(":correct: ", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("'yes' ", DialogLayout.Top)
        game.showLongText("'door opens'", DialogLayout.Full)
        game.showLongText("'gets in the freez thing'", DialogLayout.Full)
        game.showLongText("'door closes'", DialogLayout.Full)
        game.setDialogTextColor(1)
        game.setDialogFrame(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 9 9 9 9 9 9 9 9 9 9 9 1 
            1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `)
        game.showLongText("...", DialogLayout.Full)
        game.showLongText("WAIT NO I DOUNT WANNA STAY IN HERE ", DialogLayout.Full)
        game.showLongText("NOO GET ME OUT I DONT WANT TO FREEZ ", DialogLayout.Full)
        game.showLongText("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe", DialogLayout.Full)
        game.showLongText("'gets frozen'  ", DialogLayout.Full)
        game.showLongText("...", DialogLayout.Full)
        game.setDialogTextColor(2)
        game.showLongText("1 year goes by", DialogLayout.Full)
        game.showLongText("5 years go by", DialogLayout.Full)
        game.showLongText("10 years go by", DialogLayout.Full)
        game.showLongText("15 years go by", DialogLayout.Full)
        game.showLongText("20 years go by", DialogLayout.Full)
        game.showLongText("25 years go by ", DialogLayout.Full)
        game.showLongText("30 years go by", DialogLayout.Full)
        game.showLongText("40 years go by ", DialogLayout.Full)
        game.showLongText("50 years go by ", DialogLayout.Full)
        game.showLongText("60 years go by", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("the door opens ", DialogLayout.Full)
        game.showLongText("wait wtf happened here", DialogLayout.Full)
        current_level = 1
        startLevel()
    } else {
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        game.showLongText(":Password=", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("hmmmmmmmmmm", DialogLayout.Top)
        game.showLongText("oh i know ", DialogLayout.Top)
        game.showLongText("types in 80082", DialogLayout.Full)
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        game.showLongText(":incorrect:", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("Damn ok how about ", DialogLayout.Top)
        game.showLongText("types in ABCDEFG123", DialogLayout.Full)
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        game.showLongText(":incorrect:", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("god damn it ok what did that rando say again  ", DialogLayout.Top)
        game.showLongText("something about the password being like Child of star ", DialogLayout.Top)
        game.showLongText("oh wait lets try that ", DialogLayout.Top)
        game.showLongText("types in childstar ", DialogLayout.Full)
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        game.showLongText(":incorrect:", DialogLayout.Full)
        game.showLongText(":try again later: ", DialogLayout.Full)
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f f f f f f f f f f f f f f f 
            `)
        game.showLongText("FOR FUCK SAKE!!!", DialogLayout.Top)
        game.showLongText("-20 mins later- ", DialogLayout.Full)
        current_level = 6
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.showLongText("this place looks shit", DialogLayout.Top)
    game.showLongText("im goanna leave ", DialogLayout.Top)
    game.showLongText("you go up the elevator ", DialogLayout.Top)
    current_level += 1
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    game.showLongText("this looks like a good place ", DialogLayout.Top)
    game.showLongText("im goanna leave it here", DialogLayout.Top)
    game.showLongText("now RUN TO HAMISH", DialogLayout.Top)
    info.startCountdown(10)
    current_level += 2
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile25`, function (sprite, location) {
    game.showLongText("yo the password is STARchild&$*", DialogLayout.Top)
    game.showLongText("in the third ", DialogLayout.Top)
    game.showLongText(";}", DialogLayout.Top)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    game.showLongText("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAA", DialogLayout.Top)
    game.showLongText("plasma ending ", DialogLayout.Top)
    info.startCountdown(-1)
    game.over(true, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    current_level += -3
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile17`, function (sprite, location) {
    current_level += 7
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    current_level += 1
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    current_level += 1
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    current_level += -1
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile139`, function (sprite, location) {
    if (Math.percentChance(45)) {
        game.showLongText(":password=", DialogLayout.Full)
        game.showLongText("hummmmmmmmmmm", DialogLayout.Top)
        game.showLongText("oh I know ", DialogLayout.Top)
        game.showLongText("types in STARchild&$*", DialogLayout.Full)
        game.showLongText(":correct: ", DialogLayout.Full)
        game.showLongText("'yes' ", DialogLayout.Top)
        game.showLongText("'door opens'", DialogLayout.Full)
        game.showLongText("'gets in the freez thing'", DialogLayout.Full)
        game.showLongText("'door closes'", DialogLayout.Bottom)
        game.showLongText("...", DialogLayout.Bottom)
        game.showLongText("WAIT NO I DOUNT WANNA STAY IN HERE ", DialogLayout.Top)
        game.showLongText("NOO GET ME OUT I DONT WANT TO FREEZ ", DialogLayout.Top)
        game.showLongText("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe", DialogLayout.Top)
        game.showLongText("'gets frozen'  ", DialogLayout.Full)
        game.showLongText("...", DialogLayout.Full)
        game.showLongText("f", DialogLayout.Full)
        game.showLongText("fa", DialogLayout.Full)
        game.showLongText("fal", DialogLayout.Full)
        game.showLongText("fall", DialogLayout.Full)
        game.showLongText("fall o", DialogLayout.Full)
        game.showLongText("fall ou", DialogLayout.Full)
        game.showLongText("fall out", DialogLayout.Full)
        game.showLongText("fall out 4", DialogLayout.Full)
        game.showLongText("fall out 4 e", DialogLayout.Full)
        game.showLongText("fall out 4 en", DialogLayout.Full)
        game.showLongText("fall out 4 end", DialogLayout.Full)
        game.showLongText("fall out 4 endi", DialogLayout.Full)
        game.showLongText("fall out 4 endin", DialogLayout.Full)
        game.showLongText("fall out 4 ending", DialogLayout.Full)
        game.showLongText("FALL OUT 4 ENDING", DialogLayout.Full)
        game.over(true, effects.splatter)
    } else {
        game.showLongText(":Password=", DialogLayout.Full)
        game.showLongText("hmmmmmmmmmm", DialogLayout.Top)
        game.showLongText("oh i know ", DialogLayout.Top)
        game.showLongText("types in 80082", DialogLayout.Full)
        game.showLongText(":incorrect:", DialogLayout.Full)
        game.showLongText("Damn ok how about ", DialogLayout.Top)
        game.showLongText("types in ABCDEFG123", DialogLayout.Full)
        game.showLongText(":incorrect:", DialogLayout.Full)
        game.showLongText("god damn it ok what did that rando say again  ", DialogLayout.Top)
        game.showLongText("something about the password being like Child of star ", DialogLayout.Top)
        game.showLongText("oh wait lets try that ", DialogLayout.Top)
        game.showLongText("types in childstar ", DialogLayout.Full)
        game.showLongText(":incorrect:", DialogLayout.Full)
        game.showLongText(":try again later: ", DialogLayout.Full)
        game.showLongText("FOR FUCK SAKE!!!", DialogLayout.Top)
        game.showLongText("-20 mins later- ", DialogLayout.Full)
        current_level = 6
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    if (Math.percentChance(40)) {
        game.showLongText("this looks like a good place ", DialogLayout.Top)
        game.showLongText("im goanna leave it here", DialogLayout.Top)
        game.showLongText("OH NO I FORGOT THE TIMER ", DialogLayout.Top)
        current_level += 2
        startLevel()
    } else {
        game.showLongText("this looks like a good place ", DialogLayout.Top)
        game.showLongText("im goanna leave it here", DialogLayout.Top)
        game.showLongText("now RUN TO HAMISH", DialogLayout.Top)
        info.startCountdown(7)
        game.setGameOverMessage(false, ")}]KABOOM[{(")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile78`, function (sprite, location) {
	
})
function startLevel () {
    if (current_level == 0) {
        game.showLongText("Oh cool a PIP-BOY", DialogLayout.Full)
        tiles.setTilemap(tilemap`level`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    } else if (current_level == 3) {
        game.showLongText("holy shit", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (current_level == 4) {
        game.showLongText("what the fuck", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (current_level == 5) {
        tiles.setCurrentTilemap(tilemap`level16`)
    } else if (current_level == 6) {
        game.showLongText("AHHH WTH WHY IS IT SO LIGHT", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level7`)
    } else if (current_level == 7) {
        game.showLongText("now time to place that bomb", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level10`)
    } else if (current_level == 8) {
        tiles.setCurrentTilemap(tilemap`level12`)
        info.stopCountdown()
    } else if (current_level == 9) {
        tiles.setCurrentTilemap(tilemap`level26`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    scene.cameraFollowSprite(Hops_and_Paw)
    info.setLife(5)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coin)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flower)) {
        value4.destroy()
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        flower = sprites.create(img`
            . . . e e e e e . . . . . . . . 
            . . e e . . . e e . . . . . . . 
            . e e . . . . . e . . . . . . . 
            e e . . . f f f f f f f . . . . 
            e . . . f f 1 f f f f f f . . . 
            e . . f f 1 f f f f f f f f . . 
            e . . f 1 f f f f f f f f f . . 
            e . . f 1 f f f f f f f f f . . 
            e . . f 1 f f f f f f f f f . . 
            e . . f 1 f f f f f f f f f . . 
            e . . f f f f f f f f f f f . . 
            e e . f f f f f f f f f f f . . 
            . e . . f f f f f f f f f . . . 
            . e . . . f f f f f f f . . . . 
            . e . . . . . . . . . . . . . . 
            . e e e e . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . e e e e e e e . . 
            . . . . f f f f f f f . . e . . 
            . . . f f f f f f f f f . . e . 
            . . f f 1 1 1 1 1 f f f f . e e 
            . f f 1 f f f f f f f f f f . e 
            . f f 1 f f f f f f f f f f . e 
            . f f 1 f f f f f f f f f f . e 
            . f f 1 f f f f f f f f f f . e 
            . f f 1 f f f f f f f f f f . e 
            . f f 1 f f f f f f f f f f e e 
            . f f f f f f f f f f f f f e . 
            . . f f f 1 1 1 f f f f f . e . 
            . . . f f f f f f f f f . . e . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e e e . . 
            . . . . . f f f f f . . . e . . 
            . . . . f f f f f f f . . . e . 
            . . . f f 1 1 1 1 f f f . . e . 
            . . f f 1 f f f f f f f f . . e 
            . . f f 1 f f f f f f f f . . e 
            . . f f 1 f f f f f f f f . . e 
            . . f f 1 f f f f f f f f . . e 
            . . f f 1 f f f f f f f f . . e 
            . . f f 1 f f f f f f f f . . e 
            . . f f f f f f f f f f f . e e 
            . . . f f f 1 1 f f f f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e . . . . . 
            . . . . . . . f . . e e e . . . 
            . . . . . . f f f . . . e e . . 
            . . . . . . f 1 f . . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e e . . . 
            . . . . . . f f f . . . e e . . 
            . . . . . f f f f f . . . e . . 
            . . . . f f 1 1 f f f . . e e . 
            . . . f f 1 f f f f f f . . e . 
            . . . f f 1 f f f f f f . . e . 
            . . . f f 1 f f f f f f . . e . 
            . . . f f 1 f f f f f f . . e . 
            . . . f f 1 f f f f f f . . e . 
            . . . f f 1 f f f f f f . . e . 
            . . . f f f f f f f f f . . . . 
            . . . . f f f 1 f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . . . f . . . e e . . . 
            . . . . . . f f f . . . e . . . 
            . . . . . f f 1 f f . . e e . . 
            . . . . f f 1 f f f f . . e . . 
            . . . . f f 1 f f f f . . e e . 
            . . . . f f 1 f f f f . . . e . 
            . . . . f f 1 f f f f . . . e . 
            . . . . f f 1 f f f f . . . e . 
            . . . . f f 1 f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . . . f . . . e e . . . 
            . . . . . . f f f . . . e . . . 
            . . . . . . f 1 f . . . . e . . 
            . . . . . f f f f f . . . e . . 
            . . . . . f f f f f . . . e e . 
            . . . . . f f f f f . . . . e . 
            . . . . . f f f f f . . . . e . 
            . . . . . f f f f f . . . . e . 
            . . . . . f f f f f . . . . e . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . . . f . . . e e . . . 
            . . . . . . f f f . . . e . . . 
            . . . . . . f 1 f . . . e e . . 
            . . . . . . f f f . . . . e . . 
            . . . . . . f f f . . . . e . . 
            . . . . . . f f f . . . . e . . 
            . . . . . . f f f . . . . e . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e e . . . 
            . . . . . . . f . . . . e . . . 
            . . . . . . f f f . . . e e . . 
            . . . . . f f 1 f f . . . e . . 
            . . . . f f 1 f f f f . . e . . 
            . . . . f f 1 f f f f . . e . . 
            . . . . f f 1 f f f f . . e . . 
            . . . . f f 1 f f f f . . e . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . . f f f . . e e . . . 
            . . . . . f f f f f . . e . . . 
            . . . . f f 1 1 f f f . e e . . 
            . . . f f 1 f f f f f f . e . . 
            . . . f f 1 f f f f f f . e . . 
            . . . f f 1 f f f f f f . e . . 
            . . . f f 1 f f f f f f . e e . 
            . . . f f 1 f f f f f f . . . . 
            . . . f f 1 f f f f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f f 1 f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(flower, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile70`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 5 f 5 . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . 9 1 1 1 9 . . . . . . 
            . . . . . 9 1 1 1 9 . . . . . . 
            . . . . 9 1 9 1 9 1 9 . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . 1 9 1 . . . . . . . 
            . . . . . . 1 9 1 . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 5 f 5 . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 1 9 1 . . . . . . . 
            . . . . . 1 9 9 9 1 . . . . . . 
            . . . . . 1 9 9 9 1 . . . . . . 
            . . . . 1 9 1 9 1 9 1 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 5 f 5 . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . 9 1 1 1 9 . . . . . . 
            . . . . . 9 1 1 1 9 . . . . . . 
            . . . . 9 1 9 1 9 1 9 . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(flower, value6)
        tiles.setTileAt(value6, assets.tile`myTile70`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile69`)) {
        flower = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 e e e d d d d e 6 6 6 6 
            6 6 6 6 c c d 7 f 7 f d 6 6 6 6 
            6 6 6 6 c c d f f 7 f d 6 6 6 6 
            6 6 6 6 e e e d d d d e 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 5 6 5 6 5 6 5 6 6 6 6 6 6 
            6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 
            6 6 5 e e e d d d d e 5 5 6 6 6 
            6 5 5 c c d 7 f 7 f d 5 6 6 6 6 
            6 6 5 c c d f f 7 f d 5 5 6 6 6 
            6 5 5 e e e d d d d e 5 6 6 6 6 
            6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 
            6 6 6 6 5 6 5 6 5 6 5 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `,img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 5 6 5 6 5 6 5 6 6 6 6 6 
            6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 
            6 5 5 e e e d d d d e 5 6 6 6 6 
            6 6 5 c c d 7 f 7 f d 5 5 6 6 6 
            6 5 5 c c d 7 f 7 f d 5 6 6 6 6 
            6 6 5 e e e d d d d e 5 5 6 6 6 
            6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 
            6 6 6 5 6 5 6 5 6 5 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `],
        100,
        true
        )
        tiles.placeOnTile(flower, value7)
        tiles.setTileAt(value7, assets.tile`myTile69`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    game.showLongText("oh no", DialogLayout.Top)
    current_level += 8
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let flower: Sprite = null
let bee: Sprite = null
let Hops_and_Paw: Sprite = null
let current_level = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    7bbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbb7777777bbbbbbbbbb7777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbb7
    7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbb777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777bbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbbbbb777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbb7bbbbb
    77777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbbbbbbbbbbbbbbbbb7777bbbb
    bbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbb777bbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbbbbbbbbbbbbbbb77777bbbbb
    bbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbbbbbbbbbbbbbbbbb777777bbbbbbbbb77bbbbbbbbbbbbbbbbb7bbbbbbbb777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777bbbbbbbbbbbbbbbbbbbbbbb777777bbbbbbbbbb7bbbbbbbbbbbb7777bbbbbbbbb7777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbb777777bbbbbb7bbbbbbb77bbbbbbb7777777bbbbbbbbbbbbbbbbbb77bbbbbbbbbbbbbbb7777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbb77bbbbbbbbbbbb777bbbbbbbbbbbbbbbbbbbbbbbb77bbbbbb777bbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777bbbbbb7777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7
    77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbb777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbb777
    777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbb7777bbbbbb7777777777775bbbbbbbbbbbbbbbbbbbbbbbbbb777777777777bbbbbbbbbbbbbbbbbbbbbbbbb777777
    7777777777777777bbbbbbbbbbbbb5bbbbbbbbbbbbbb55bbbbbbbbbbbbbbbbbbbbbbbb77bbbbbb77777777775557777bbbbbbbbbbbbbbbb777777777777777777bbbbbbbbbbbbbbbbbbbb77777777777
    55557777777777777bbbbbbbbbb555bbbbbbbbbbbb55555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777555555557777777777777777777777777777777777777bbbbbbbbbbbbbbbbbb7777777777777
    5555555555777777555555555555555bbbbbbbb5555555555555555555555bbbbbbbbbbbbbbbbb555555555555555577777777777777777777777777777777777bbbbbbbbbbbbbbbbb77555557777777
    55555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffff55555555557777777777777777777777777777777777bbbbbbbbbbbbbbb777555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf55555555555557777775557777777777777777777777bbbbbbbbbbbbbb5555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf55555555555555555555555777777777777775577777bbbbbbbbbbbbb55555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf555555555555555555555555555577777777555577777bbbbbbbbbbb555555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf555555555555555555555555555555555555555555555bbbbbbbbbb5555555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf5555555555555555555555555555555555555555555555bbbbbbbb55555555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf5555555555555555555555555555555555555555555555bbbbbbb555555555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf55555555555555555555555555555555555555555555555555555555555555555555555555
    55555555555555555555555555555555555555555555555fcccccccccccccccccccccccccccccccccccccf55555555555555555555555555555555555555555555555555555555555555555555555555
    5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccf55555555555555555555555555555555555555555555555555555555555555555555
    cccc555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccf55555555555555555555555555555555555555555555555555555555555555555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccf55555555555555555555555555555555555555555555555555555555555555555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccf555555555555fffffffffffffffff55555555fffffffffffffffffffffff55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccf555555555555fbbbbbbbbbbbbbbbf55555555fcccccccccccccccccccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccfffffffffffcf555555555555fbbbbbbbbbbbbbbbf55555555fcccccccccccccccccccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fcccccccccccccccccccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fcccccccccccccccccccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fcccccccccccccccccccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccfffffffffffcccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fcccccccccccccccccccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fccffffffffffffffcccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fccfbbbbbbbbbbbbfcccccf55555555
    5555555fcccccccccccccccccccccccccccccccccccccccfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcf555555555555fbbbbbbbbbbbbbbbf55555555fccfbbbbbbbbbbbbfcccccf55555555
    5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    5fcccccfcccccccccccccccccccccccccccccccccccccccfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcfccccccccccccfbbbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcccccccf
    5fcccccfccccccccccccccccccccccccffffffffffffffcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcfccccccccccccfbbbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcccccccf
    5fcccccfccccccccccccccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcfccccccccccccfbbbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfffffff
    5fcccccfccccccccccccccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfcfccccccccccccfbbbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfccccccccccccccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbffffffffffffffffffbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfffffffffffccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfcfcccccccccccccfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfffffffffffffffffbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbbbbbbfccccccccfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfffffffffffffffccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbbfccccccccccccfbbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbffffffffffffffffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbbbbbbbbbbbfcccccfcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfffffffffffffffffcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfcccccccfbbbbbfbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfffffffffffffffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcccccfcfbbbbbbbbff11bb111bb111ffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcffffffffffffbbbff11bb111bb111ffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbf111bb111b111bfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbff11bb111bb111ffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfbbbbbf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcfffffff
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcccccccf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcccccccf
    5fcfbbbfbfbbbbfbbbffbbbbbbbbbbbbffbbbbbbbbbbbfbfbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbfbbbbffbbbfbfbbbbbbbbbbbbfbfbbbbbbbbfbbbbfbbbbbbbbfccfbbfbbbbbbbbbfbbbbbfcccccccf
    5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
current_level = 0
Hops_and_Paw = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . f . . 9 
    9 . . . . . . . . . . . f f f 9 
    9 . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    9 . . . f f f f f f f f f f . 9 
    9 . . . f 1 1 1 1 1 1 1 f . . 9 
    9 . . . f . f . . . f . f . . 9 
    9 9 9 9 1 9 1 9 9 9 1 9 1 9 9 9 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_Paw, 80, 0)
startLevel()
game.onUpdate(function () {
    if (Hops_and_Paw.vy < 0) {
        Hops_and_Paw.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . f . . . 9 
            9 . . . . . . . . . . f f f . 9 
            9 . . . . . . . . . . f f 7 f 9 
            9 . . f . . . . . . f f f f f 9 
            9 . . f . . . . . . f f f f . 9 
            9 . f f . . . . . f f f . . . 9 
            9 . f . . . . . . f f f f f f 1 
            9 . f . . . . . f f f 1 . . . 9 
            9 . f f . . . f f f 1 f f f 1 9 
            9 . . f f f f f f 1 . . . . . 9 
            9 . . . . . f 1 f . . . . . . 9 
            9 . . . . f f . f . . . . . . 9 
            9 . . . . f . . 1 . . . . . . 9 
            9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        Hops_and_Paw.setImage(img`
            9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 
            9 . . . . . f . . . . . . . . 9 
            9 . . . . f f . . . . . . . . 9 
            9 . . . . f . . . . . . . . . 9 
            9 . . . . f . . . . . . . . . 9 
            9 . . . . f f . . . . . . . . 9 
            9 . . . f f f f . . . . . . . 9 
            9 . . . f f f f . . . . . . . 9 
            9 . . . f 1 1 f f . . . . . . 9 
            9 . . . f . 1 1 f f . . f . . 9 
            9 . . . f . f 1 f f f f f f f 9 
            9 . . . 1 . 1 . f f f f f f 5 f 
            9 . . . . . . . f 1 1 f f f f f 
            9 . . . . . . . f . f . . . . 9 
            9 . . . . . . . f . f . . . . 9 
            9 9 9 9 9 9 9 9 1 9 1 1 9 9 9 9 
            `)
    } else if (Hops_and_Paw.x % 2 == 0) {
        Hops_and_Paw.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . f . . 9 
            9 . . . . . . . . . . . f f f 9 
            9 . . . . . . . . . . . f f 7 f 
            f f f f f f f f f f f f f f f f 
            9 . . . f f f f f f f f f f . 9 
            9 . . . f f 1 1 1 1 1 f f . . 9 
            9 . . . f f . . . . . f f . . 9 
            9 9 9 9 1 1 9 9 9 9 9 1 1 9 9 9 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . f . . 9 
            9 . . . . . . . . . . . f f f 9 
            9 . . . . . . . . . . . f f 5 f 
            f f f f f f f f f f f f f f f f 
            9 . . . f f f f f f f f f f . 9 
            9 . . . f 1 1 1 1 1 1 1 f . . 9 
            9 . . . f . f . . . f . f . . 9 
            9 9 9 9 1 9 1 9 9 9 1 9 1 9 9 9 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . f f . 9 
            9 . . . . . . . . . . f 7 f . 9 
            9 . . . . . . . . . . f f f . 9 
            9 . . . . . . . . . f f f f . 9 
            9 . . . . . . . . . . . f f f 1 
            9 . . . . . . . . . . . f 1 . 9 
            9 . . . . . . . . . . . f 1 f 1 
            9 . . . . . . f . . . . f 1 . 9 
            9 . . . . . . f . . . . f 1 . 9 
            9 . . . . . . f . . . . f 1 . 9 
            9 . . . . . . f . . . . f 1 f 1 
            9 . . . . . . f f . . . f 1 . 9 
            9 9 9 9 9 9 9 9 f f f f f f f 1 
            `)
    } else {
        Hops_and_Paw.ay = 350
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
forever(function () {
    music.play(music.createSong(hex`00780004080c0102001c000c960064006d019001000478002c010000640032000000000a060005060000000400011e`), music.PlaybackMode.UntilDone)
    pause(5000)
})
