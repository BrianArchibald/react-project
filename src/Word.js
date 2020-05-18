import React from 'react';

const Word = () => {

    const words = ["AFRICA", "AGENT", "AIR", "ALIEN", "ALPS", "AMAZON", "AMBULANCE", "AMERICA", "ANGEL", "ANTARCTICA", "APPLE", "ARM", "ATLANTIS", "AUSTRALIA", "AZTEC", "BACK", "BALL", "BAND", "BANK", "BAR", "BARK", "BAT", "BATTERY", "BEACH", "BEAR", "BEAT", "BED", "BEIJING", "BELL", "BELT", "BERLIN", "BERMUDA", "BERRY", "BILL", "BLOCK", "BOARD", "BOLT", "BOMB", "BOND", "BOOM", "BOOT", "BOTTLE", "BOW", "BOX", "BRIDGE", "BRUSH", "BUCK", "BUFFALO", "BUG", "BUGLE", "BUTTON", "CALF", "CANADA", "CAP", "CAPITAL", "CAR", "CARD", "CARROT", "CASINO", "CAST", "CAT", "CELL", "CENTAUR", "CENTER", "CHAIR", "CHANGE", "CHARGE", "CHECK", "CHEST", "CHICK", "CHINA", "CHOCOLATE", "CHURCH", "CIRCLE", "CLIFF", "CLOAK", "CLUB", "CODE", "COLD", "COMIC", "COMPOUND", "CONCERT", "CONDUCTOR", "CONTRACT", "COOK", "COPPER", "COTTON", "COURT", "COVER", "CRANE", "CRASH", "CRICKET", "CROSS", "CROWN", "CYCLE", "CZECH", "DANCE", "DATE", "DAY", "DEATH", "DECK", "DEGREE", "DIAMOND", "DICE", "DINOSAUR", "DISEASE", "DOCTOR", "DOG", "DRAFT", "DRAGON", "DRESS", "DRILL", "DROP", "DUCK", "DWARF", "EAGLE", "EGYPT", "EMBASSY", "ENGINE", "ENGLAND", "EUROPE", "EYE", "FACE", "FAIR", "FALL", "FAN", "FENCE", "FIELD", "FIGHTER", "FIGURE", "FILE", "FILM", "FIRE", "FISH", "FLUTE", "FLY", "FOOT", "FORCE", "FOREST", "FORK", "FRANCE", "GAME", "GAS", "GENIUS", "GERMANY", "GHOST", "GIANT", "GLASS", "GLOVE", "GOLD", "GRACE", "GRASS", "GREECE", "GREEN", "GROUND", "HAM", "HAND", "HAWK", "HEAD", "HEART", "HELICOPTER", "HIMALAYAS", "HOLE", "HOLLYWOOD", "HONEY", "HOOD", "HOOK", "HORN", "HORSE", "HORSESHOE", "HOSPITAL", "HOTEL", "ICE", "ICE CREAM", "INDIA", "IRON", "IVORY", "JACK", "JAM", "JET", "JUPITER", "KANGAROO", "KETCHUP", "KEY", "KID", "KING", "KIWI", "KNIFE", "KNIGHT", "LAB", "LAP", "LASER", "LAWYER", "LEAD", "LEMON", "LEPRECHAUN", "LIFE", "LIGHT", "LIMOUSINE", "LINE", "LINK", "LION", "LITTER", "LOCH NESS", "LOCK", "LOG", "LONDON", "LUCK", "MAIL", "MAMMOTH", "MAPLE", "MARBLE", "MARCH", "MASS", "MATCH", "MERCURY", "MEXICO", "MICROSCOPE", "MILLIONAIRE", "MINE", "MINT", "MISSILE", "MODEL", "MOLE", "MOON", "MOSCOW", "MOUNT", "MOUSE", "MOUTH", "MUG", "NAIL", "NEEDLE", "NET", "NEW YORK", "NIGHT", "NINJA", "NOTE", "NOVEL", "NURSE", "NUT", "OCTOPUS", "OIL", "OLIVE", "OLYMPUS", "OPERA", "ORANGE", "ORGAN", "PALM", "PAN", "PANTS", "PAPER", "PARACHUTE", "PARK", "PART", "PASS", "PASTE", "PENGUIN", "PHOENIX", "PIANO", "PIE", "PILOT", "PIN", "PIPE", "PIRATE", "PISTOL", "PIT", "PITCH", "PLANE", "PLASTIC", "PLATE", "PLATYPUS", "PLAY", "PLOT", "POINT", "POISON", "POLE", "POLICE", "POOL", "PORT", "POST", "POUND", "PRESS", "PRINCESS", "PUMPKIN", "PUPIL", "PYRAMID", "QUEEN", "RABBIT", "RACKET", "RAY", "REVOLUTION", "RING", "ROBIN", "ROBOT", "ROCK", "ROME", "ROOT", "ROSE", "ROULETTE", "ROUND", "ROW", "RULER", "SATELLITE", "SATURN", "SCALE", "SCHOOL", "SCIENTIST", "SCORPION", "SCREEN", "SCUBA DIVER", "SEAL", "SERVER", "SHADOW", "SHAKESPEARE", "SHARK", "SHIP", "SHOE", "SHOP", "SHOT", "SINK", "SKYSCRAPER", "SLIP", "SLUG", "SMUGGLER", "SNOW", "SNOWMAN", "SOCK", "SOLDIER", "SOUL", "SOUND", "SPACE", "SPELL", "SPIDER", "SPIKE", "SPINE", "SPOT", "SPRING", "SPY", "SQUARE", "STADIUM", "STAFF", "STAR", "STATE", "STICK", "STOCK", "STRAW", "STREAM", "STRIKE", "STRING", "SUB", "SUIT", "SUPERHERO", "SWING", "SWITCH", "TABLE", "TABLET", "TAG", "TAIL", "TAP", "TEACHER", "TELESCOPE", "TEMPLE", "THEATER", "THIEF", "THUMB", "TICK", "TIE", "TIME", "TOKYO", "TOOTH", "TORCH", "TOWER", "TRACK", "TRAIN", "TRIANGLE", "TRIP", "TRUNK", "TUBE", "TURKEY", "UNDERTAKER", "UNICORN", "VACUUM", "VAN", "VET", "WAKE", "WALL", "WAR", "WASHER", "WASHINGTON", "WATCH", "WATER", "WAVE", "WEB", "WELL", "WHALE", "WHIP", "WIND", "WITCH", "WORM", "YARD",
               "DRUM", "BRIDE", "WAGON", "UNIVERSITY", "HIT", "ASH", "BASS", "ASTRONAUT", "DOLL", "NERVE", "COACH", "BEAM", "SPOON", "COUNTRY", "NOSE", "KING ARTHUR", "STAMP", "CAMP", "BRAIN", "LEAF", "TUTU", "COAST", "LUNCH", "THUNDER", "POTATO", "DESK", "ONION", "ELEPHANT", "ANCHOR", "COWBOY", "FLOOD", "MOHAWK", "SANTA", "PITCHER", "BARBECUE", "LEATHER", "SKATES", "MUSKETEER", "SNAP", "SADDLE", "GENIE", "MARK", "SHOULDER", "GOVERNOR", "MANICURE", "ANTHEM", "HALLOWEEN", "NEWTON", "BALLOON", "FIDDLE", "CRAFT", "GLACIER", "CAKE", "RAT", "TANK", "BLIND", "SPIRIT", "CABLE", "SWAMP", "EINSTEIN", "HIDE", "CRYSTAL", "GEAR", "KISS", "PEW", "POWDER", "TURTLE", "BACON", "SHERLOCK", "SQUASH", "BOOK", "RAZOR", "DRESSING", "BRICK", "BRAZIL", "TEAR", "STABLE", "BIKINI", "PEN", "ROLL", "CHRISTMAS", "RUBBER", "BAY", "MOTHER", "KICK", "FOG", "RADIO", "CRAB", "CONE", "SKULL", "WHEELCHAIR", "EGG", "BUTTER", "WEREWOLF", "CHERRY", "PATIENT", "DRYER", "DRAWING", "BOSS", "FEVER", "BANANA", "POLISH", "KNOT", "PAINT", "STORM", "GOLDILOCKS", "PILLOW", "CHAIN", "MOSES", "SAW", "BROTHER", "RAIL", "ROPE", "STREET", "PAD", "CAPTAIN", "WISH", "AXE", "SHORTS", "POPCORN", "CASTLE", "SECOND", "TEAM", "OASIS", "MESS", "MISS", "AVALANCHE", "TEXAS", "SUN", "LETTER", "RUST", "WING", "STEEL", "EAR", "SCROLL", "BUNK", "CANE", "VENUS", "LADDER", "PURSE", "SHEET", "NAPOLEON", "SUGAR", "DIRECTOR", "ACE", "SCRATCH", "BUCKET", "CAESAR", "DISK", "BEARD", "BULB", "BENCH", "SCARECROW", "IGLOO", "TUXEDO", "EARTH", "RAM", "SISTER", "BREAD", "RECORD", "DASH", "GREENHOUSE", "DRONE", "STEAM", "BISCUIT", "RIP", "NOTRE DAME", "LIP", "SHAMPOO", "CHEESE", "SACK", "MOUNTIE", "SUMO", "SAHARA", "WALRUS", "DUST", "HAMMER", "CLOUD", "SPRAY", "ST.PATRICK", "KILT", "MONKEY", "FROG", "DENTIST", "RAINBOW", "WHISTLE", "REINDEER", "KITCHEN", "LEMONADE", "SLIPPER", "FLOOR", "VALENTINE", "PEPPER", "ROAD", "SHED", "BOWLER", "MILK", "WHEEL", "MAGAZINE", "BRASS", "TEA", "HELMET", "FLAG", "TROLL", "JAIL", "STICKER", "PUPPET", "CHALK", "BONSAI", "SWEAT", "GANGSTER", "BUTTERFLY", "STORY", "SALAD", "ARMOR", "SMOKE", "CAVE", "QUACK", "BREAK", "SNAKE", "MILL", "GYMNAST", "WONDERLAND", "DRIVER", "SPURS", "ZOMBIE", "PIG", "CLEOPATRA", "TOAST", "PENNY", "ANT", "VOLUME", "LACE", "BATTLESHIP", "MARACAS", "METER", "SLING", "DELTA", "STEP", "JOAN OF ARC", "COMET", "BATH", "POLO", "GUM", "VAMPIRE", "SKI", "POCKET", "BATTLE", "FOAM", "RODEO", "SQUIRREL", "SALT", "MUMMY", "BLACKSMITH", "CHIP", "GOAT", "LAUNDRY", "BEE", "TATTOO", "RUSSIA", "TIN", "MAP", "YELLOWSTONE", "SILK", "HOSE", "SLOTH", "KUNG FU", "CLOCK", "BEAN", "LIGHTNING", "BOWL", "GUITAR", "RANCH", "PEARL", "FLAT", "VIRUS", "ICE AGE", "COFFEE", "MARATHON", "ATTIC", "WEDDING", "COLUMBUS", "POP", "SHERWOOD", "TRICK", "NYLON", "LOCUST", "PACIFIC", "CUCKOO", "TORNADO", "MEMORY", "JOCKEY", "MINOTAUR", "BIG BANG", "PAGE", "SPHINX", "CRUSADER", "VOLCANO", "RIFLE", "BOIL", "HAIR", "BICYCLE", "JUMPER", "SMOOTHIE", "SLEEP", "PENTAGON", "GROOM", "RIVER", "FARM", "JUDGE", "VIKING", "EASTER", "MUD", "PARROT", "COMB", "SALSA", "EDEN", "ARMY", "PADDLE", "SALOON", "MONA LISA", "MILE", "BLIZZARD", "QUARTER", "JEWELER", "HAMBURGER", "GLASSES", "SAIL", "BOXER", "RICE", "MIRROR", "INK", "BEER", "TIPI", "MAKEUP", "MICROWAVE", "HERCULES", "SIGN", "PIZZA", "WOOL", "HOMER", "MINUTE", "SWORD", "SOUP", "ALASKA", "BABY", "POTTER", "SHOWER", "BLADE", "NOAH", "SOAP", "TUNNEL", "PEACH", "DOLLAR", "TIP", "LOVE", "JELLYFISH", "STETHOSCOPE", "TASTE", "FUEL", "MOSQUITO", "WIZARD", "BIG BEN", "GARDEN", "WAITRESS", "SHOOT", "SHELL", "LUMBERJACK", "MEDIC", "DREAM", "BLUES", "EARTHQUAKE", "PEA", "PARADE", "SLED", "SMELL", "COMPUTER", "COW", "PEANUT", "WINDOW", "MUSTARD", "SAND", "GOLF", "CROW", "ICELAND", "APRON", "VIOLET", "DOOR", "TIGER", "JOKER", "HOUSE", "COLLAR", "HAWAII", "DWARF", "PINE", "MAGICIAN", "FROST", "CURRY", "BUBBLE", "WOOD"]
    
    function random_word(words) {
       return words[Math.floor(Math.random() * 800)];
    }

    // function to determine color of words either 8 or 9 for blue or red
    return(
        <div className='word blue'>
            {random_word(words)}
        </div>
    );
}

export default Word;