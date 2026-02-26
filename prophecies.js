const PROPHECIES = [
    {
        id: 'seal-1',
        reference: 'Revelation 6:1-2',
        title: 'First Seal: The White Horse',
        description: 'And I saw, and behold a white horse: and he that sat on him had a bow; and a crown was given unto him: and he went forth conquering, and to conquer.',
        status: 'fulfilled',
        matchedEvents: [
            {
                date: '1948',
                title: 'Establishment of the United Nations',
                description: 'Global peacekeeping organization emerges with stated goal of world unity and diplomacy.'
            },
            {
                date: '1993',
                title: 'Oslo Accords',
                description: 'Peace negotiations between Israel and PLO, the "rider with a bow" seeking peace through diplomacy.'
            }
        ],
        confidence: 72,
        category: 'seal'
    },
    {
        id: 'seal-2',
        reference: 'Revelation 6:3-4',
        title: 'Second Seal: The Red Horse',
        description: 'And there went out another horse that was red: and power was given to him that sat thereon to take peace from the earth, and that they should kill one another: and there was given unto him a great sword.',
        status: 'fulfilled',
        matchedEvents: [
            {
                date: '1914-1945',
                title: 'World Wars I & II',
                description: 'Over 100 million killed in global conflicts. Peace removed from earth on unprecedented scale.'
            },
            {
                date: '2022',
                title: 'Russia-Ukraine War',
                description: 'Major European conflict returns, threatening global stability and nuclear deterrence.'
            }
        ],
        confidence: 94,
        category: 'seal'
    },
    {
        id: 'seal-3',
        reference: 'Revelation 6:5-6',
        title: 'Third Seal: The Black Horse',
        description: 'And I beheld, and lo a black horse; and he that sat on him had a pair of balances in his hand... A measure of wheat for a penny, and three measures of barley for a penny.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2008',
                title: 'Global Financial Crisis',
                description: 'Worldwide economic collapse leading to currency devaluation and food price inflation.'
            },
            {
                date: '2022-2023',
                title: 'Global Food Crisis',
                description: 'Wheat shortages from Ukraine conflict cause famine risk across developing nations.'
            }
        ],
        confidence: 68,
        category: 'seal'
    },
    {
        id: 'seal-4',
        reference: 'Revelation 6:7-8',
        title: 'Fourth Seal: The Pale Horse',
        description: 'And I looked, and behold a pale horse: and his name that sat on him was Death, and Hell followed with him. And power was given unto them over the fourth part of the earth, to kill with sword, and with hunger, and with death, and with the beasts of the earth.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2020-2023',
                title: 'COVID-19 Pandemic',
                description: 'Global pandemic killing millions. Death counts exceeded 6.9 million officially recorded.'
            },
            {
                date: '2022',
                title: 'H5N1 Avian Flu Outbreak',
                description: '"Beasts of the earth" - zoonotic diseases increasingly jumping species barriers.'
            }
        ],
        confidence: 76,
        category: 'seal'
    },
    {
        id: 'seal-5',
        reference: 'Revelation 6:9-11',
        title: 'Fifth Seal: The Martyrs',
        description: 'And when he had opened the fifth seal, I saw under the altar the souls of them that were slain for the word of God, and for the testimony which they held.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2014-Present',
                title: 'Christian Persecution in Middle East',
                description: 'ISIS and extremist groups systematically target Christians for death.'
            },
            {
                date: '2023',
                title: 'Nigeria Christian Massacres',
                description: 'Over 4,000 Christians killed annually in Nigeria alone for their faith.'
            }
        ],
        confidence: 81,
        category: 'seal'
    },
    {
        id: 'seal-6',
        reference: 'Revelation 6:12-17',
        title: 'Sixth Seal: Cosmic Disturbances',
        description: 'And I beheld when he had opened the sixth seal, and, lo, there was a great earthquake; and the sun became black as sackcloth of hair, and the moon became as blood.',
        status: 'pending',
        matchedEvents: [],
        confidence: 15,
        category: 'seal'
    },
    {
        id: 'seal-7',
        reference: 'Revelation 8:1',
        title: 'Seventh Seal: Silence in Heaven',
        description: 'And when he had opened the seventh seal, there was silence in heaven about the space of half an hour.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'seal'
    },
    {
        id: 'trumpet-1',
        reference: 'Revelation 8:7',
        title: 'First Trumpet: Hail and Fire',
        description: 'The first angel sounded, and there followed hail and fire mingled with blood, and they were cast upon the earth: and the third part of trees was burnt up, and all green grass was burnt up.',
        status: 'disputed',
        matchedEvents: [
            {
                date: '2019-2020',
                title: 'Australian Bushfires',
                description: 'Over 46 million acres burned, billions of animals killed, unprecedented scale.'
            },
            {
                date: '2020-2021',
                title: 'Western US Wildfires',
                description: 'Record-breaking fire seasons in California, Oregon, and Washington.'
            }
        ],
        confidence: 38,
        category: 'trumpet'
    },
    {
        id: 'trumpet-2',
        reference: 'Revelation 8:8-9',
        title: 'Second Trumpet: Burning Mountain',
        description: 'And the second angel sounded, and as it were a great mountain burning with fire was cast into the sea: and the third part of the sea became blood; And the third part of the creatures which were in the sea died.',
        status: 'disputed',
        matchedEvents: [
            {
                date: '2010',
                title: 'Deepwater Horizon Oil Spill',
                description: '"Burning mountain" - oil rig explosion releasing massive contamination into Gulf of Mexico.'
            },
            {
                date: '2023',
                title: 'Ocean Heat Waves',
                description: 'Record ocean temperatures causing mass marine die-offs in Atlantic and Pacific.'
            }
        ],
        confidence: 29,
        category: 'trumpet'
    },
    {
        id: 'trumpet-3',
        reference: 'Revelation 8:10-11',
        title: 'Third Trumpet: Wormwood',
        description: 'And the third angel sounded, and there fell a great star from heaven, burning as it were a lamp, and it fell upon the third part of the rivers, and upon the fountains of waters; And the name of the star is called Wormwood.',
        status: 'disputed',
        matchedEvents: [
            {
                date: '1986',
                title: 'Chernobyl Disaster',
                description: 'Nuclear reactor explosion. "Chernobyl" means "wormwood" in Ukrainian. Radiation poisoned waters.'
            },
            {
                date: '2011',
                title: 'Fukushima Daiichi Disaster',
                description: 'Nuclear meltdown contaminating Pacific Ocean with radioactive water.'
            }
        ],
        confidence: 52,
        category: 'trumpet'
    },
    {
        id: 'trumpet-4',
        reference: 'Revelation 8:12',
        title: 'Fourth Trumpet: Darkened Sky',
        description: 'And the fourth angel sounded, and the third part of the sun was smitten, and the third part of the moon, and the third part of the stars; so as the third part of them was darkened.',
        status: 'pending',
        matchedEvents: [],
        confidence: 12,
        category: 'trumpet'
    },
    {
        id: 'trumpet-5',
        reference: 'Revelation 9:1-12',
        title: 'Fifth Trumpet: The Locusts',
        description: 'And the fifth angel sounded, and I saw a star fall from heaven unto the earth: and to him was given the key of the bottomless pit. And there arose a smoke out of the pit... And the shapes of the locusts were like unto horses prepared unto battle.',
        status: 'disputed',
        matchedEvents: [
            {
                date: '2014-2019',
                title: 'ISIS Caliphate',
                description: '"Locusts" interpreted as military helicopters or demonic forces released upon earth.'
            },
            {
                date: '2019-2020',
                title: 'East African Locust Plague',
                description: 'Biblical-scale locust swarms devastate crops across East Africa and Middle East.'
            }
        ],
        confidence: 34,
        category: 'trumpet'
    },
    {
        id: 'trumpet-6',
        reference: 'Revelation 9:13-21',
        title: 'Sixth Trumpet: Four Angels Released',
        description: 'Loose the four angels which are bound in the great river Euphrates. And the four angels were loosed, which were prepared for an hour, and a day, and a month, and a year, for to slay the third part of men.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2003-2011',
                title: 'Iraq War',
                description: 'Conflict centered on the Euphrates region. Four angels bound at Euphrates released.'
            },
            {
                date: '2014-Present',
                title: 'Syrian Civil War',
                description: 'Euphrates region conflict with massive casualties and international involvement.'
            }
        ],
        confidence: 44,
        category: 'trumpet'
    },
    {
        id: 'trumpet-7',
        reference: 'Revelation 11:15',
        title: 'Seventh Trumpet: Kingdom Proclaimed',
        description: 'And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'trumpet'
    },
    {
        id: 'bowl-1',
        reference: 'Revelation 16:2',
        title: 'First Bowl: Grievous Sores',
        description: 'And the first went, and poured out his vial upon the earth; and there fell a noisome and grievous sore upon the men which had the mark of the beast.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'bowl'
    },
    {
        id: 'bowl-2',
        reference: 'Revelation 16:3',
        title: 'Second Bowl: Sea Becomes Blood',
        description: 'And the second angel poured out his vial upon the sea; and it became as the blood of a dead man: and every living soul died in the sea.',
        status: 'disputed',
        matchedEvents: [
            {
                date: '2016-2021',
                title: 'Red Tide Algal Blooms',
                description: 'Massive toxic algae blooms turning waters red, killing marine life in Florida and worldwide.'
            },
            {
                date: '2023',
                title: 'Record Ocean Dead Zones',
                description: 'Oxygen-depleted "dead zones" in oceans expanding to unprecedented levels.'
            }
        ],
        confidence: 22,
        category: 'bowl'
    },
    {
        id: 'bowl-3',
        reference: 'Revelation 16:4-7',
        title: 'Third Bowl: Rivers Become Blood',
        description: 'And the third angel poured out his vial upon the rivers and fountains of waters; and they became blood.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'bowl'
    },
    {
        id: 'bowl-4',
        reference: 'Revelation 16:8-9',
        title: 'Fourth Bowl: Sun Scorches Men',
        description: 'And the fourth angel poured out his vial upon the sun; and power was given unto him to scorch men with fire. And men were scorched with great heat.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2022',
                title: 'European Heat Wave',
                description: 'Record temperatures over 40°C across UK and Europe. Over 60,000 heat-related deaths.'
            },
            {
                date: '2023',
                title: 'Hottest Year on Record',
                description: 'Global temperatures break all records. Unprecedented heat waves worldwide.'
            }
        ],
        confidence: 67,
        category: 'bowl'
    },
    {
        id: 'bowl-5',
        reference: 'Revelation 16:10-11',
        title: 'Fifth Bowl: Darkness on Beast Kingdom',
        description: 'And the fifth angel poured out his vial upon the seat of the beast; and his kingdom was full of darkness; and they gnawed their tongues for pain.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'bowl'
    },
    {
        id: 'bowl-6',
        reference: 'Revelation 16:12-16',
        title: 'Sixth Bowl: Euphrates Dried',
        description: 'And the sixth angel poured out his vial upon the great river Euphrates; and the water thereof was dried up, that the way of the kings of the east might be prepared.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2021-2023',
                title: 'Euphrates River Drought',
                description: 'Historic drought causes Euphrates to reach lowest levels in recorded history.'
            },
            {
                date: '2023',
                title: 'China Belt and Road',
                description: '"Kings of the east" - China expanding influence westward through infrastructure projects.'
            }
        ],
        confidence: 58,
        category: 'bowl'
    },
    {
        id: 'bowl-7',
        reference: 'Revelation 16:17-21',
        title: 'Seventh Bowl: Great Earthquake',
        description: 'And the seventh angel poured out his vial into the air; and there came a great voice out of the temple of heaven, from the throne, saying, It is done. And there were voices, and thunders, and lightnings; and there was a great earthquake.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'bowl'
    },
    {
        id: 'sign-1',
        reference: 'Revelation 12:1-2',
        title: 'The Woman Clothed with the Sun',
        description: 'And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars.',
        status: 'disputed',
        matchedEvents: [
            {
                date: '2017',
                title: 'September 23 Revelation 12 Sign',
                description: 'Astronomical alignment matching description occurred September 23, 2017.'
            }
        ],
        confidence: 41,
        category: 'sign'
    },
    {
        id: 'sign-2',
        reference: 'Revelation 12:3-4',
        title: 'The Great Red Dragon',
        description: 'And there appeared another wonder in heaven; and behold a great red dragon, having seven heads and ten horns, and seven crowns upon his heads.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2024',
                title: 'Rise of Authoritarian Powers',
                description: 'China, Russia, and Iran forming anti-Western alliance. Seven heads and ten horns interpreted as coalition.'
            }
        ],
        confidence: 36,
        category: 'sign'
    },
    {
        id: 'sign-3',
        reference: 'Revelation 13:1-2',
        title: 'The Beast from the Sea',
        description: 'And I stood upon the sand of the sea, and saw a beast rise up out of the sea, having seven heads and ten horns, and upon his horns ten crowns.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'sign'
    },
    {
        id: 'sign-4',
        reference: 'Revelation 13:11-18',
        title: 'The Beast from the Earth - Mark of the Beast',
        description: 'And he causeth all, both small and great, rich and poor, free and bond, to receive a mark in their right hand, or in their foreheads: And that no man might buy or sell, save he that had the mark.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2020-2022',
                title: 'Vaccine Passports',
                description: 'Digital health passes required for travel, commerce, and public access.'
            },
            {
                date: '2022-Present',
                title: 'Central Bank Digital Currencies',
                description: 'CBDCs being developed for programmable money, enabling transaction control.'
            },
            {
                date: '2024',
                title: 'Neuralink Brain Implants',
                description: 'Technology emerging for brain-computer interfaces in human trials.'
            }
        ],
        confidence: 74,
        category: 'sign'
    },
    {
        id: 'sign-5',
        reference: 'Revelation 13:18',
        title: 'Number of the Beast: 666',
        description: 'Here is wisdom. Let him that hath understanding count the number of the beast: for it is the number of a man; and his number is Six hundred threescore and six.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '2015',
                title: 'Internet of Things 666 Patents',
                description: 'Microsoft patent WO/2020/060606 for cryptocurrency body activity data.'
            },
            {
                date: '2020',
                title: 'ID2020 Digital Identity Alliance',
                description: 'Bill Gates and partners promoting global digital ID system.'
            }
        ],
        confidence: 63,
        category: 'sign'
    },
    {
        id: 'other-1',
        reference: 'Revelation 11:1-2',
        title: 'The Temple Measured',
        description: 'And there was given me a reed like unto a rod: and the angel stood, saying, Rise, and measure the temple of God, and the altar, and them that worship therein. But the court which is without the temple leave out, for it is given unto the Gentiles.',
        status: 'in_progress',
        matchedEvents: [
            {
                date: '1948',
                title: 'Israel Established',
                description: 'Jewish state reestablished, prerequisite for Third Temple construction.'
            },
            {
                date: '2023',
                title: 'Temple Institute Preparations',
                description: 'All temple vessels prepared, red heifer candidates identified, ready for construction.'
            }
        ],
        confidence: 85,
        category: 'other'
    },
    {
        id: 'other-2',
        reference: 'Revelation 11:3-12',
        title: 'The Two Witnesses',
        description: 'And I will give power unto my two witnesses, and they shall prophesy a thousand two hundred and threescore days, clothed in sackcloth.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'other'
    },
    {
        id: 'other-3',
        reference: 'Revelation 14:1-5',
        title: 'The 144,000 Sealed',
        description: 'And I looked, and, lo, a Lamb stood on the mount Zion, and with him an hundred forty and four thousand, having his Father\'s name written in their foreheads.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'other'
    },
    {
        id: 'other-4',
        reference: 'Revelation 16:16',
        title: 'Armageddon',
        description: 'And he gathered them together into a place called in the Hebrew tongue Armageddon.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'other'
    },
    {
        id: 'other-5',
        reference: 'Revelation 19:11-21',
        title: 'The Rider on the White Horse',
        description: 'And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'other'
    },
    {
        id: 'other-6',
        reference: 'Revelation 20:1-3',
        title: 'Satan Bound 1000 Years',
        description: 'And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand. And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'other'
    },
    {
        id: 'other-7',
        reference: 'Revelation 21:1-4',
        title: 'New Heaven and New Earth',
        description: 'And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea.',
        status: 'pending',
        matchedEvents: [],
        confidence: 0,
        category: 'other'
    }
];

function calculateProgress(prophecies = PROPHECIES) {
    if (!prophecies || prophecies.length === 0) return 0;
    
    const statusValues = {
        'fulfilled': 100,
        'in_progress': 50,
        'disputed': 25,
        'pending': 0
    };
    
    let totalProgress = 0;
    
    prophecies.forEach(prophecy => {
        const statusValue = statusValues[prophecy.status] || 0;
        const confidenceMultiplier = prophecy.confidence / 100;
        totalProgress += statusValue * confidenceMultiplier;
    });
    
    return totalProgress / prophecies.length;
}

function getMatchedEvents(prophecyId) {
    const prophecy = PROPHECIES.find(p => p.id === prophecyId);
    return prophecy ? prophecy.matchedEvents : [];
}

function getStats() {
    const categories = {
        seals: PROPHECIES.filter(p => p.category === 'seal'),
        trumpets: PROPHECIES.filter(p => p.category === 'trumpet'),
        bowls: PROPHECIES.filter(p => p.category === 'bowl')
    };
    
    const countByStatus = (items) => ({
        fulfilled: items.filter(p => p.status === 'fulfilled').length,
        in_progress: items.filter(p => p.status === 'in_progress').length,
        disputed: items.filter(p => p.status === 'disputed').length,
        pending: items.filter(p => p.status === 'pending').length
    });
    
    return {
        seals: countByStatus(categories.seals),
        trumpets: countByStatus(categories.trumpets),
        bowls: countByStatus(categories.bowls)
    };
}
