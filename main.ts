controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.x += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.over(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    thePlayer.y += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let ally: Sprite = null
let car: Sprite = null
let thePlayer: Sprite = null
tiles.setTilemap(tilemap`level2`)
thePlayer = sprites.create(img`
    . . . f f f f f f f f f . . . . 
    . . f 7 7 7 7 f 7 7 7 7 f . . . 
    . . f 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 f 7 7 7 f 7 7 f . . . 
    . . f 7 7 7 7 7 7 7 7 7 f . . . 
    . . . f 7 7 7 7 7 7 7 f . . . . 
    . . . f 7 7 7 7 7 7 7 f . . . . 
    . . f 7 7 7 7 7 7 7 7 7 f f . . 
    . . f 7 7 7 7 7 7 7 7 7 f f . . 
    . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
    . f 7 7 f 7 7 7 7 7 f 7 7 f . . 
    . f 7 f f 7 7 7 7 7 7 7 7 f . . 
    . f 7 7 7 7 f f f 7 7 7 7 f . . 
    . . f f f f . . . f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
thePlayer.setPosition(81, 120)
scene.setBackgroundColor(2)
scene.cameraFollowSprite(thePlayer)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(100)) {
        car = sprites.create(img`
            . . . . . . . e e e e e . . . . 
            . . . . . e e 2 2 2 2 2 e . . . 
            . . . . e e 2 2 2 2 2 2 2 e . . 
            . . . . e 9 4 4 4 2 2 2 4 b e . 
            . . e e 9 9 4 4 4 4 2 2 4 9 b e 
            . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
            e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
            e 2 2 2 9 9 e e e e e e e 9 9 e 
            e 2 2 2 9 b e b b b e b e b 9 e 
            e 2 e e e e b b b b e b b e b e 
            e e 3 3 e e 2 2 2 2 e 2 2 e e e 
            e 3 3 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e f f f e e e e f f f e e 
            . e e f f f b f e e f f f b f . 
            . . . . c b b . . . . c b b . . 
            `, SpriteKind.Enemy)
        car.setVelocity(-50, 0)
        tiles.placeOnRandomTile(car, sprites.vehicle.roadHorizontal)
        car.x = 200
        car.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(50)) {
        ally = sprites.create(img`
            ........................
            ....f.....f.............
            ....66..f6666f.f........
            ..f6666.666666666f......
            ...66666666665666f......
            ..f666666666666666......
            ...666666666666666f.....
            ...666666666d.d.d.......
            ..f6666666666d.d.d......
            ....666666666666666f....
            ...f66666666666666f.....
            ....6666.66666666.......
            ...f66.f.f6666666f......
            .....f.....f.f.f........
            ........................
            ........................
            `, SpriteKind.Enemy)
        ally.setVelocity(50, 0)
        tiles.placeOnRandomTile(ally, sprites.dungeon.hazardLava1)
        ally.x = 16
        ally.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
