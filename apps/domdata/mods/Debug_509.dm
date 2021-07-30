#modname "Debug Mod 5.09"
#description "This mod is intended for debugging the behaviour of Dominions 4. It removes level restrictions for all spells and magic items. In addition, the mod introduces five new spells to help debug. The new spells are Super Wish, Super GoR, Super Divine Name, Contact Debug Sensei and Eyes of Debug. Based on the Dominions 3 version by ryo_akashi."
#version 5.09
#domversion 5.09
#icon "Debug.tga"

------
--New Monster
#newmonster 3401
#copystats 941
#copyspr 941
#name "Debug Sensei"
#descr "The Sensei is an almighty being, well versed in all magic. He warns you sternly to use him only for debugging the mysteries of Dominions."
#nametype 133
#clearmagic
#magicskill 0 9
#magicskill 1 9
#magicskill 2 9
#magicskill 3 9
#magicskill 4 9
#magicskill 5 9
#magicskill 6 9
#magicskill 7 9
#magicskill 8 9
#startage 100
#mapmove 25
#spy
#gemprod 4 10
#forgebonus 80
#stealthy 30
#amphibian
#gcost 0
#end

------
--New Spells
#newspell
#copyspell "Gift of Reason"
#name "Super GoR"
#descr "A cheaper Gift of Reason, costing one astral pearl."
#path 0 4
#school 0
#researchlevel 0
#pathlevel 0 1
#fatiguecost 100
#end

#newspell
#copyspell "Divine Name"
#name "Super Divine Name"
#descr "A cheaper Divine Name, costing one astral pearl."
#path 0 4
#school 0
#researchlevel 0
#pathlevel 0 1
#fatiguecost 100
#end

#newspell
#copyspell "Wish"
#name "Super Wish"
#descr "A cheaper Wish, costing one astral pearl."
#path 0 4
#school 0
#researchlevel 0
#pathlevel 0 1
#fatiguecost 100
#end

#newspell
#name "Contact Debug Sensei"
#descr "Contacts the Debug Sensei, an almighty being who is well versed in all magic."
#path 0 4
#school 0
#researchlevel 0
#pathlevel 0 1
#fatiguecost 100
#effect 10021
#damage 3401
#spec 8388608
#end

#newspell
#copyspell "The Eyes of God"
#name "The Eyes of Debug"
#descr "A cheaper The Eyes of God, costing one astral pearl."
#path 0 4
#school 0
#researchlevel 0
#pathlevel 0 1
#fatiguecost 100
#end

-------
--Magic spells to level 0
#selectspell 150
#researchlevel 0
#end
#selectspell 151
#researchlevel 0
#end
#selectspell 152
#researchlevel 0
#end
#selectspell 153
#researchlevel 0
#end
#selectspell 154
#researchlevel 0
#end
#selectspell 155
#researchlevel 0
#end
#selectspell 156
#researchlevel 0
#end
#selectspell 157
#researchlevel 0
#end
#selectspell 158
#researchlevel 0
#end
#selectspell 159
#researchlevel 0
#end
#selectspell 160
#researchlevel 0
#end
#selectspell 161
#researchlevel 0
#end
#selectspell 162
#researchlevel 0
#end
#selectspell 163
#researchlevel 0
#end
#selectspell 164
#researchlevel 0
#end
#selectspell 165
#researchlevel 0
#end
#selectspell 166
#researchlevel 0
#end
#selectspell 167
#researchlevel 0
#end
#selectspell 168
#researchlevel 0
#end
#selectspell 169
#researchlevel 0
#end
#selectspell 170
#researchlevel 0
#end
#selectspell 171
#researchlevel 0
#end
#selectspell 172
#researchlevel 0
#end
#selectspell 173
#researchlevel 0
#end
#selectspell 174
#researchlevel 0
#end
#selectspell 175
#researchlevel 0
#end
#selectspell 176
#researchlevel 0
#end
#selectspell 177
#researchlevel 0
#end
#selectspell 178
#researchlevel 0
#end
#selectspell 179
#researchlevel 0
#end
#selectspell 180
#researchlevel 0
#end
#selectspell 181
#researchlevel 0
#end
#selectspell 182
#researchlevel 0
#end
#selectspell 183
#researchlevel 0
#end
#selectspell 184
#researchlevel 0
#end
#selectspell 185
#researchlevel 0
#end
#selectspell 186
#researchlevel 0
#end
#selectspell 187
#researchlevel 0
#end
#selectspell 188
#researchlevel 0
#end
#selectspell 189
#researchlevel 0
#end
#selectspell 190
#researchlevel 0
#end
#selectspell 191
#researchlevel 0
#end
#selectspell 192
#researchlevel 0
#end
#selectspell 193
#researchlevel 0
#end
#selectspell 194
#researchlevel 0
#end
#selectspell 195
#researchlevel 0
#end
#selectspell 196
#researchlevel 0
#end
#selectspell 197
#researchlevel 0
#end
#selectspell 198
#researchlevel 0
#end
#selectspell 199
#researchlevel 0
#end
#selectspell 200
#researchlevel 0
#end
#selectspell 201
#researchlevel 0
#end
#selectspell 202
#researchlevel 0
#end
#selectspell 203
#researchlevel 0
#end
#selectspell 204
#researchlevel 0
#end
#selectspell 205
#researchlevel 0
#end
#selectspell 206
#researchlevel 0
#end
#selectspell 207
#researchlevel 0
#end
#selectspell 208
#researchlevel 0
#end
#selectspell 209
#researchlevel 0
#end
#selectspell 210
#researchlevel 0
#end
#selectspell 211
#researchlevel 0
#end
#selectspell 212
#researchlevel 0
#end
#selectspell 213
#researchlevel 0
#end
#selectspell 214
#researchlevel 0
#end
#selectspell 215
#researchlevel 0
#end
#selectspell 216
#researchlevel 0
#end
#selectspell 217
#researchlevel 0
#end
#selectspell 218
#researchlevel 0
#end
#selectspell 219
#researchlevel 0
#end
#selectspell 220
#researchlevel 0
#end
#selectspell 221
#researchlevel 0
#end
#selectspell 222
#researchlevel 0
#end
#selectspell 223
#researchlevel 0
#end
#selectspell 224
#researchlevel 0
#end
#selectspell 225
#researchlevel 0
#end
#selectspell 226
#researchlevel 0
#end
#selectspell 227
#researchlevel 0
#end
#selectspell 228
#researchlevel 0
#end
#selectspell 229
#researchlevel 0
#end
#selectspell 230
#researchlevel 0
#end
#selectspell 231
#researchlevel 0
#end
#selectspell 232
#researchlevel 0
#end
#selectspell 233
#researchlevel 0
#end
#selectspell 234
#researchlevel 0
#end
#selectspell 235
#researchlevel 0
#end
#selectspell 236
#researchlevel 0
#end
#selectspell 237
#researchlevel 0
#end
#selectspell 238
#researchlevel 0
#end
#selectspell 239
#researchlevel 0
#end
#selectspell 240
#researchlevel 0
#end
#selectspell 241
#researchlevel 0
#end
#selectspell 242
#researchlevel 0
#end
#selectspell 243
#researchlevel 0
#end
#selectspell 244
#researchlevel 0
#end
#selectspell 245
#researchlevel 0
#end
#selectspell 246
#researchlevel 0
#end
#selectspell 247
#researchlevel 0
#end
#selectspell 248
#researchlevel 0
#end
#selectspell 249
#researchlevel 0
#end
#selectspell 250
#researchlevel 0
#end
#selectspell 251
#researchlevel 0
#end
#selectspell 252
#researchlevel 0
#end
#selectspell 253
#researchlevel 0
#end
#selectspell 254
#researchlevel 0
#end
#selectspell 255
#researchlevel 0
#end
#selectspell 256
#researchlevel 0
#end
#selectspell 257
#researchlevel 0
#end
#selectspell 258
#researchlevel 0
#end
#selectspell 259
#researchlevel 0
#end
#selectspell 260
#researchlevel 0
#end
#selectspell 261
#researchlevel 0
#end
#selectspell 262
#researchlevel 0
#end
#selectspell 263
#researchlevel 0
#end
#selectspell 264
#researchlevel 0
#end
#selectspell 265
#researchlevel 0
#end
#selectspell 266
#researchlevel 0
#end
#selectspell 267
#researchlevel 0
#end
#selectspell 268
#researchlevel 0
#end
#selectspell 269
#researchlevel 0
#end
#selectspell 270
#researchlevel 0
#end
#selectspell 271
#researchlevel 0
#end
#selectspell 272
#researchlevel 0
#end
#selectspell 273
#researchlevel 0
#end
#selectspell 274
#researchlevel 0
#end
#selectspell 275
#researchlevel 0
#end
#selectspell 276
#researchlevel 0
#end
#selectspell 277
#researchlevel 0
#end
#selectspell 278
#researchlevel 0
#end
#selectspell 279
#researchlevel 0
#end
#selectspell 280
#researchlevel 0
#end
#selectspell 281
#researchlevel 0
#end
#selectspell 282
#researchlevel 0
#end
#selectspell 283
#researchlevel 0
#end
#selectspell 284
#researchlevel 0
#end
#selectspell 285
#researchlevel 0
#end
#selectspell 286
#researchlevel 0
#end
#selectspell 287
#researchlevel 0
#end
#selectspell 288
#researchlevel 0
#end
#selectspell 289
#researchlevel 0
#end
#selectspell 290
#researchlevel 0
#end
#selectspell 291
#researchlevel 0
#end
#selectspell 292
#researchlevel 0
#end
#selectspell 293
#researchlevel 0
#end
#selectspell 294
#researchlevel 0
#end
#selectspell 295
#researchlevel 0
#end
#selectspell 296
#researchlevel 0
#end
#selectspell 297
#researchlevel 0
#end
#selectspell 298
#researchlevel 0
#end
#selectspell 299
#researchlevel 0
#end
#selectspell 300
#researchlevel 0
#end
#selectspell 301
#researchlevel 0
#end
#selectspell 302
#researchlevel 0
#end
#selectspell 303
#researchlevel 0
#end
#selectspell 304
#researchlevel 0
#end
#selectspell 305
#researchlevel 0
#end
#selectspell 306
#researchlevel 0
#end
#selectspell 307
#researchlevel 0
#end
#selectspell 308
#researchlevel 0
#end
#selectspell 309
#researchlevel 0
#end
#selectspell 310
#researchlevel 0
#end
#selectspell 311
#researchlevel 0
#end
#selectspell 312
#researchlevel 0
#end
#selectspell 313
#researchlevel 0
#end
#selectspell 314
#researchlevel 0
#end
#selectspell 315
#researchlevel 0
#end
#selectspell 316
#researchlevel 0
#end
#selectspell 317
#researchlevel 0
#end
#selectspell 318
#researchlevel 0
#end
#selectspell 319
#researchlevel 0
#end
#selectspell 320
#researchlevel 0
#end
#selectspell 321
#researchlevel 0
#end
#selectspell 322
#researchlevel 0
#end
#selectspell 323
#researchlevel 0
#end
#selectspell 324
#researchlevel 0
#end
#selectspell 325
#researchlevel 0
#end
#selectspell 326
#researchlevel 0
#end
#selectspell 327
#researchlevel 0
#end
#selectspell 328
#researchlevel 0
#end
#selectspell 329
#researchlevel 0
#end
#selectspell 330
#researchlevel 0
#end
#selectspell 331
#researchlevel 0
#end
#selectspell 332
#researchlevel 0
#end
#selectspell 333
#researchlevel 0
#end
#selectspell 334
#researchlevel 0
#end
#selectspell 335
#researchlevel 0
#end
#selectspell 336
#researchlevel 0
#end
#selectspell 337
#researchlevel 0
#end
#selectspell 338
#researchlevel 0
#end
#selectspell 339
#researchlevel 0
#end
#selectspell 340
#researchlevel 0
#end
#selectspell 341
#researchlevel 0
#end
#selectspell 342
#researchlevel 0
#end
#selectspell 343
#researchlevel 0
#end
#selectspell 344
#researchlevel 0
#end
#selectspell 345
#researchlevel 0
#end
#selectspell 346
#researchlevel 0
#end
#selectspell 347
#researchlevel 0
#end
#selectspell 348
#researchlevel 0
#end
#selectspell 349
#researchlevel 0
#end
#selectspell 350
#researchlevel 0
#end
#selectspell 351
#researchlevel 0
#end
#selectspell 352
#researchlevel 0
#end
#selectspell 353
#researchlevel 0
#end
#selectspell 354
#researchlevel 0
#end
#selectspell 355
#researchlevel 0
#end
#selectspell 356
#researchlevel 0
#end
#selectspell 357
#researchlevel 0
#end
#selectspell 358
#researchlevel 0
#end
#selectspell 359
#researchlevel 0
#end
#selectspell 360
#researchlevel 0
#end
#selectspell 361
#researchlevel 0
#end
#selectspell 362
#researchlevel 0
#end
#selectspell 363
#researchlevel 0
#end
#selectspell 364
#researchlevel 0
#end
#selectspell 365
#researchlevel 0
#end
#selectspell 366
#researchlevel 0
#end
#selectspell 367
#researchlevel 0
#end
#selectspell 368
#researchlevel 0
#end
#selectspell 369
#researchlevel 0
#end
#selectspell 370
#researchlevel 0
#end
#selectspell 371
#researchlevel 0
#end
#selectspell 372
#researchlevel 0
#end
#selectspell 373
#researchlevel 0
#end
#selectspell 374
#researchlevel 0
#end
#selectspell 375
#researchlevel 0
#end
#selectspell 376
#researchlevel 0
#end
#selectspell 377
#researchlevel 0
#end
#selectspell 378
#researchlevel 0
#end
#selectspell 379
#researchlevel 0
#end
#selectspell 380
#researchlevel 0
#end
#selectspell 381
#researchlevel 0
#end
#selectspell 382
#researchlevel 0
#end
#selectspell 383
#researchlevel 0
#end
#selectspell 384
#researchlevel 0
#end
#selectspell 385
#researchlevel 0
#end
#selectspell 386
#researchlevel 0
#end
#selectspell 387
#researchlevel 0
#end
#selectspell 388
#researchlevel 0
#end
#selectspell 389
#researchlevel 0
#end
#selectspell 390
#researchlevel 0
#end
#selectspell 391
#researchlevel 0
#end
#selectspell 392
#researchlevel 0
#end
#selectspell 393
#researchlevel 0
#end
#selectspell 394
#researchlevel 0
#end
#selectspell 395
#researchlevel 0
#end
#selectspell 396
#researchlevel 0
#end
#selectspell 397
#researchlevel 0
#end
#selectspell 398
#researchlevel 0
#end
#selectspell 399
#researchlevel 0
#end
#selectspell 400
#researchlevel 0
#end
#selectspell 401
#researchlevel 0
#end
#selectspell 402
#researchlevel 0
#end
#selectspell 403
#researchlevel 0
#end
#selectspell 404
#researchlevel 0
#end
#selectspell 405
#researchlevel 0
#end
#selectspell 406
#researchlevel 0
#end
#selectspell 407
#researchlevel 0
#end
#selectspell 408
#researchlevel 0
#end
#selectspell 409
#researchlevel 0
#end
#selectspell 410
#researchlevel 0
#end
#selectspell 411
#researchlevel 0
#end
#selectspell 412
#researchlevel 0
#end
#selectspell 413
#researchlevel 0
#end
#selectspell 414
#researchlevel 0
#end
#selectspell 415
#researchlevel 0
#end
#selectspell 416
#researchlevel 0
#end
#selectspell 417
#researchlevel 0
#end
#selectspell 418
#researchlevel 0
#end
#selectspell 419
#researchlevel 0
#end
#selectspell 420
#researchlevel 0
#end
#selectspell 421
#researchlevel 0
#end
#selectspell 422
#researchlevel 0
#end
#selectspell 423
#researchlevel 0
#end
#selectspell 424
#researchlevel 0
#end
#selectspell 425
#researchlevel 0
#end
#selectspell 426
#researchlevel 0
#end
#selectspell 427
#researchlevel 0
#end
#selectspell 428
#researchlevel 0
#end
#selectspell 429
#researchlevel 0
#end
#selectspell 430
#researchlevel 0
#end
#selectspell 431
#researchlevel 0
#end
#selectspell 432
#researchlevel 0
#end
#selectspell 433
#researchlevel 0
#end
#selectspell 434
#researchlevel 0
#end
#selectspell 435
#researchlevel 0
#end
#selectspell 436
#researchlevel 0
#end
#selectspell 437
#researchlevel 0
#end
#selectspell 438
#researchlevel 0
#end
#selectspell 439
#researchlevel 0
#end
#selectspell 440
#researchlevel 0
#end
#selectspell 441
#researchlevel 0
#end
#selectspell 442
#researchlevel 0
#end
#selectspell 443
#researchlevel 0
#end
#selectspell 444
#researchlevel 0
#end
#selectspell 445
#researchlevel 0
#end
#selectspell 446
#researchlevel 0
#end
#selectspell 447
#researchlevel 0
#end
#selectspell 448
#researchlevel 0
#end
#selectspell 449
#researchlevel 0
#end
#selectspell 450
#researchlevel 0
#end
#selectspell 451
#researchlevel 0
#end
#selectspell 452
#researchlevel 0
#end
#selectspell 453
#researchlevel 0
#end
#selectspell 454
#researchlevel 0
#end
#selectspell 455
#researchlevel 0
#end
#selectspell 456
#researchlevel 0
#end
#selectspell 457
#researchlevel 0
#end
#selectspell 458
#researchlevel 0
#end
#selectspell 459
#researchlevel 0
#end
#selectspell 460
#researchlevel 0
#end
#selectspell 461
#researchlevel 0
#end
#selectspell 462
#researchlevel 0
#end
#selectspell 463
#researchlevel 0
#end
#selectspell 464
#researchlevel 0
#end
#selectspell 465
#researchlevel 0
#end
#selectspell 466
#researchlevel 0
#end
#selectspell 467
#researchlevel 0
#end
#selectspell 468
#researchlevel 0
#end
#selectspell 469
#researchlevel 0
#end
#selectspell 470
#researchlevel 0
#end
#selectspell 471
#researchlevel 0
#end
#selectspell 472
#researchlevel 0
#end
#selectspell 473
#researchlevel 0
#end
#selectspell 474
#researchlevel 0
#end
#selectspell 475
#researchlevel 0
#end
#selectspell 476
#researchlevel 0
#end
#selectspell 477
#researchlevel 0
#end
#selectspell 478
#researchlevel 0
#end
#selectspell 479
#researchlevel 0
#end
#selectspell 480
#researchlevel 0
#end
#selectspell 481
#researchlevel 0
#end
#selectspell 482
#researchlevel 0
#end
#selectspell 483
#researchlevel 0
#end
#selectspell 484
#researchlevel 0
#end
#selectspell 485
#researchlevel 0
#end
#selectspell 486
#researchlevel 0
#end
#selectspell 487
#researchlevel 0
#end
#selectspell 488
#researchlevel 0
#end
#selectspell 489
#researchlevel 0
#end
#selectspell 490
#researchlevel 0
#end
#selectspell 491
#researchlevel 0
#end
#selectspell 492
#researchlevel 0
#end
#selectspell 493
#researchlevel 0
#end
#selectspell 494
#researchlevel 0
#end
#selectspell 495
#researchlevel 0
#end
#selectspell 496
#researchlevel 0
#end
#selectspell 497
#researchlevel 0
#end
#selectspell 498
#researchlevel 0
#end
#selectspell 499
#researchlevel 0
#end
#selectspell 500
#researchlevel 0
#end
#selectspell 501
#researchlevel 0
#end
#selectspell 502
#researchlevel 0
#end
#selectspell 503
#researchlevel 0
#end
#selectspell 504
#researchlevel 0
#end
#selectspell 505
#researchlevel 0
#end
#selectspell 506
#researchlevel 0
#end
#selectspell 507
#researchlevel 0
#end
#selectspell 508
#researchlevel 0
#end
#selectspell 509
#researchlevel 0
#end
#selectspell 510
#researchlevel 0
#end
#selectspell 511
#researchlevel 0
#end
#selectspell 512
#researchlevel 0
#end
#selectspell 513
#researchlevel 0
#end
#selectspell 514
#researchlevel 0
#end
#selectspell 515
#researchlevel 0
#end
#selectspell 516
#researchlevel 0
#end
#selectspell 517
#researchlevel 0
#end
#selectspell 518
#researchlevel 0
#end
#selectspell 519
#researchlevel 0
#end
#selectspell 520
#researchlevel 0
#end
#selectspell 521
#researchlevel 0
#end
#selectspell 522
#researchlevel 0
#end
#selectspell 523
#researchlevel 0
#end
#selectspell 524
#researchlevel 0
#end
#selectspell 525
#researchlevel 0
#end
#selectspell 526
#researchlevel 0
#end
#selectspell 527
#researchlevel 0
#end
#selectspell 528
#researchlevel 0
#end
#selectspell 529
#researchlevel 0
#end
#selectspell 530
#researchlevel 0
#end
#selectspell 531
#researchlevel 0
#end
#selectspell 532
#researchlevel 0
#end
#selectspell 533
#researchlevel 0
#end
#selectspell 534
#researchlevel 0
#end
#selectspell 535
#researchlevel 0
#end
#selectspell 536
#researchlevel 0
#end
#selectspell 537
#researchlevel 0
#end
#selectspell 538
#researchlevel 0
#end
#selectspell 539
#researchlevel 0
#end
#selectspell 540
#researchlevel 0
#end
#selectspell 541
#researchlevel 0
#end
#selectspell 542
#researchlevel 0
#end
#selectspell 543
#researchlevel 0
#end
#selectspell 544
#researchlevel 0
#end
#selectspell 545
#researchlevel 0
#end
#selectspell 546
#researchlevel 0
#end
#selectspell 547
#researchlevel 0
#end
#selectspell 548
#researchlevel 0
#end
#selectspell 549
#researchlevel 0
#end
#selectspell 550
#researchlevel 0
#end
#selectspell 551
#researchlevel 0
#end
#selectspell 552
#researchlevel 0
#end
#selectspell 553
#researchlevel 0
#end
#selectspell 554
#researchlevel 0
#end
#selectspell 555
#researchlevel 0
#end
#selectspell 556
#researchlevel 0
#end
#selectspell 557
#researchlevel 0
#end
#selectspell 558
#researchlevel 0
#end
#selectspell 559
#researchlevel 0
#end
#selectspell 560
#researchlevel 0
#end
#selectspell 561
#researchlevel 0
#end
#selectspell 562
#researchlevel 0
#end
#selectspell 563
#researchlevel 0
#end
#selectspell 564
#researchlevel 0
#end
#selectspell 565
#researchlevel 0
#end
#selectspell 566
#researchlevel 0
#end
#selectspell 567
#researchlevel 0
#end
#selectspell 568
#researchlevel 0
#end
#selectspell 569
#researchlevel 0
#end
#selectspell 570
#researchlevel 0
#end
#selectspell 571
#researchlevel 0
#end
#selectspell 572
#researchlevel 0
#end
#selectspell 573
#researchlevel 0
#end
#selectspell 574
#researchlevel 0
#end
#selectspell 575
#researchlevel 0
#end
#selectspell 576
#researchlevel 0
#end
#selectspell 577
#researchlevel 0
#end
#selectspell 578
#researchlevel 0
#end
#selectspell 579
#researchlevel 0
#end
#selectspell 580
#researchlevel 0
#end
#selectspell 581
#researchlevel 0
#end
#selectspell 582
#researchlevel 0
#end
#selectspell 583
#researchlevel 0
#end
#selectspell 584
#researchlevel 0
#end
#selectspell 585
#researchlevel 0
#end
#selectspell 586
#researchlevel 0
#end
#selectspell 587
#researchlevel 0
#end
#selectspell 588
#researchlevel 0
#end
#selectspell 589
#researchlevel 0
#end
#selectspell 590
#researchlevel 0
#end
#selectspell 591
#researchlevel 0
#end
#selectspell 592
#researchlevel 0
#end
#selectspell 593
#researchlevel 0
#end
#selectspell 594
#researchlevel 0
#end
#selectspell 595
#researchlevel 0
#end
#selectspell 596
#researchlevel 0
#end
#selectspell 597
#researchlevel 0
#end
#selectspell 598
#researchlevel 0
#end
#selectspell 599
#researchlevel 0
#end
#selectspell 600
#researchlevel 0
#end
#selectspell 601
#researchlevel 0
#end
#selectspell 602
#researchlevel 0
#end
#selectspell 603
#researchlevel 0
#end
#selectspell 604
#researchlevel 0
#end
#selectspell 605
#researchlevel 0
#end
#selectspell 606
#researchlevel 0
#end
#selectspell 607
#researchlevel 0
#end
#selectspell 608
#researchlevel 0
#end
#selectspell 609
#researchlevel 0
#end
#selectspell 610
#researchlevel 0
#end
#selectspell 611
#researchlevel 0
#end
#selectspell 612
#researchlevel 0
#end
#selectspell 613
#researchlevel 0
#end
#selectspell 614
#researchlevel 0
#end
#selectspell 615
#researchlevel 0
#end
#selectspell 616
#researchlevel 0
#end
#selectspell 617
#researchlevel 0
#end
#selectspell 618
#researchlevel 0
#end
#selectspell 619
#researchlevel 0
#end
#selectspell 620
#researchlevel 0
#end
#selectspell 621
#researchlevel 0
#end
#selectspell 622
#researchlevel 0
#end
#selectspell 623
#researchlevel 0
#end
#selectspell 624
#researchlevel 0
#end
#selectspell 625
#researchlevel 0
#end
#selectspell 626
#researchlevel 0
#end
#selectspell 627
#researchlevel 0
#end
#selectspell 628
#researchlevel 0
#end
#selectspell 629
#researchlevel 0
#end
#selectspell 630
#researchlevel 0
#end
#selectspell 631
#researchlevel 0
#end
#selectspell 632
#researchlevel 0
#end
#selectspell 633
#researchlevel 0
#end
#selectspell 634
#researchlevel 0
#end
#selectspell 635
#researchlevel 0
#end
#selectspell 636
#researchlevel 0
#end
#selectspell 637
#researchlevel 0
#end
#selectspell 638
#researchlevel 0
#end
#selectspell 639
#researchlevel 0
#end
#selectspell 640
#researchlevel 0
#end
#selectspell 641
#researchlevel 0
#end
#selectspell 642
#researchlevel 0
#end
#selectspell 643
#researchlevel 0
#end
#selectspell 644
#researchlevel 0
#end
#selectspell 645
#researchlevel 0
#end
#selectspell 646
#researchlevel 0
#end
#selectspell 647
#researchlevel 0
#end
#selectspell 648
#researchlevel 0
#end
#selectspell 649
#researchlevel 0
#end
#selectspell 650
#researchlevel 0
#end
#selectspell 651
#researchlevel 0
#end
#selectspell 652
#researchlevel 0
#end
#selectspell 653
#researchlevel 0
#end
#selectspell 654
#researchlevel 0
#end
#selectspell 655
#researchlevel 0
#end
#selectspell 656
#researchlevel 0
#end
#selectspell 657
#researchlevel 0
#end
#selectspell 658
#researchlevel 0
#end
#selectspell 659
#researchlevel 0
#end
#selectspell 660
#researchlevel 0
#end
#selectspell 661
#researchlevel 0
#end
#selectspell 662
#researchlevel 0
#end
#selectspell 663
#researchlevel 0
#end
#selectspell 664
#researchlevel 0
#end
#selectspell 665
#researchlevel 0
#end
#selectspell 666
#researchlevel 0
#end
#selectspell 667
#researchlevel 0
#end
#selectspell 668
#researchlevel 0
#end
#selectspell 669
#researchlevel 0
#end
#selectspell 670
#researchlevel 0
#end
#selectspell 671
#researchlevel 0
#end
#selectspell 672
#researchlevel 0
#end
#selectspell 673
#researchlevel 0
#end
#selectspell 674
#researchlevel 0
#end
#selectspell 675
#researchlevel 0
#end
#selectspell 676
#researchlevel 0
#end
#selectspell 677
#researchlevel 0
#end
#selectspell 678
#researchlevel 0
#end
#selectspell 679
#researchlevel 0
#end
#selectspell 680
#researchlevel 0
#end
#selectspell 681
#researchlevel 0
#end
#selectspell 682
#researchlevel 0
#end
#selectspell 683
#researchlevel 0
#end
#selectspell 684
#researchlevel 0
#end
#selectspell 685
#researchlevel 0
#end
#selectspell 686
#researchlevel 0
#end
#selectspell 687
#researchlevel 0
#end
#selectspell 688
#researchlevel 0
#end
#selectspell 689
#researchlevel 0
#end
#selectspell 690
#researchlevel 0
#end
#selectspell 691
#researchlevel 0
#end
#selectspell 692
#researchlevel 0
#end
#selectspell 693
#researchlevel 0
#end
#selectspell 694
#researchlevel 0
#end
#selectspell 695
#researchlevel 0
#end
#selectspell 696
#researchlevel 0
#end
#selectspell 697
#researchlevel 0
#end
#selectspell 698
#researchlevel 0
#end
#selectspell 699
#researchlevel 0
#end
#selectspell 700
#researchlevel 0
#end
#selectspell 701
#researchlevel 0
#end
#selectspell 702
#researchlevel 0
#end
#selectspell 703
#researchlevel 0
#end
#selectspell 704
#researchlevel 0
#end
#selectspell 705
#researchlevel 0
#end
#selectspell 706
#researchlevel 0
#end
#selectspell 707
#researchlevel 0
#end
#selectspell 708
#researchlevel 0
#end
#selectspell 709
#researchlevel 0
#end
#selectspell 710
#researchlevel 0
#end
#selectspell 711
#researchlevel 0
#end
#selectspell 712
#researchlevel 0
#end
#selectspell 713
#researchlevel 0
#end
#selectspell 714
#researchlevel 0
#end
#selectspell 715
#researchlevel 0
#end
#selectspell 716
#researchlevel 0
#end
#selectspell 717
#researchlevel 0
#end
#selectspell 718
#researchlevel 0
#end
#selectspell 719
#researchlevel 0
#end
#selectspell 720
#researchlevel 0
#end
#selectspell 721
#researchlevel 0
#end
#selectspell 722
#researchlevel 0
#end
#selectspell 723
#researchlevel 0
#end
#selectspell 724
#researchlevel 0
#end
#selectspell 725
#researchlevel 0
#end
#selectspell 726
#researchlevel 0
#end
#selectspell 727
#researchlevel 0
#end
#selectspell 728
#researchlevel 0
#end
#selectspell 729
#researchlevel 0
#end
#selectspell 730
#researchlevel 0
#end
#selectspell 731
#researchlevel 0
#end
#selectspell 732
#researchlevel 0
#end
#selectspell 733
#researchlevel 0
#end
#selectspell 734
#researchlevel 0
#end
#selectspell 735
#researchlevel 0
#end
#selectspell 736
#researchlevel 0
#end
#selectspell 737
#researchlevel 0
#end
#selectspell 738
#researchlevel 0
#end
#selectspell 739
#researchlevel 0
#end
#selectspell 740
#researchlevel 0
#end
#selectspell 741
#researchlevel 0
#end
#selectspell 742
#researchlevel 0
#end
#selectspell 743
#researchlevel 0
#end
#selectspell 744
#researchlevel 0
#end
#selectspell 745
#researchlevel 0
#end
#selectspell 746
#researchlevel 0
#end
#selectspell 747
#researchlevel 0
#end
#selectspell 748
#researchlevel 0
#end
#selectspell 749
#researchlevel 0
#end
#selectspell 750
#researchlevel 0
#end
#selectspell 751
#researchlevel 0
#end
#selectspell 752
#researchlevel 0
#end
#selectspell 753
#researchlevel 0
#end
#selectspell 754
#researchlevel 0
#end
#selectspell 755
#researchlevel 0
#end
#selectspell 756
#researchlevel 0
#end
#selectspell 757
#researchlevel 0
#end
#selectspell 758
#researchlevel 0
#end
#selectspell 759
#researchlevel 0
#end
#selectspell 760
#researchlevel 0
#end
#selectspell 761
#researchlevel 0
#end
#selectspell 762
#researchlevel 0
#end
#selectspell 763
#researchlevel 0
#end
#selectspell 764
#researchlevel 0
#end
#selectspell 765
#researchlevel 0
#end
#selectspell 766
#researchlevel 0
#end
#selectspell 767
#researchlevel 0
#end
#selectspell 768
#researchlevel 0
#end
#selectspell 769
#researchlevel 0
#end
#selectspell 770
#researchlevel 0
#end
#selectspell 771
#researchlevel 0
#end
#selectspell 772
#researchlevel 0
#end
#selectspell 773
#researchlevel 0
#end
#selectspell 774
#researchlevel 0
#end
#selectspell 775
#researchlevel 0
#end
#selectspell 776
#researchlevel 0
#end
#selectspell 777
#researchlevel 0
#end
#selectspell 778
#researchlevel 0
#end
#selectspell 779
#researchlevel 0
#end
#selectspell 780
#researchlevel 0
#end
#selectspell 781
#researchlevel 0
#end
#selectspell 782
#researchlevel 0
#end
#selectspell 783
#researchlevel 0
#end
#selectspell 784
#researchlevel 0
#end
#selectspell 785
#researchlevel 0
#end
#selectspell 786
#researchlevel 0
#end
#selectspell 787
#researchlevel 0
#end
#selectspell 788
#researchlevel 0
#end
#selectspell 789
#researchlevel 0
#end
#selectspell 790
#researchlevel 0
#end
#selectspell 791
#researchlevel 0
#end
#selectspell 792
#researchlevel 0
#end
#selectspell 793
#researchlevel 0
#end
#selectspell 794
#researchlevel 0
#end
#selectspell 795
#researchlevel 0
#end
#selectspell 796
#researchlevel 0
#end
#selectspell 797
#researchlevel 0
#end
#selectspell 798
#researchlevel 0
#end
#selectspell 799
#researchlevel 0
#end
#selectspell 800
#researchlevel 0
#end
#selectspell 801
#researchlevel 0
#end
#selectspell 802
#researchlevel 0
#end
#selectspell 803
#researchlevel 0
#end
#selectspell 804
#researchlevel 0
#end
#selectspell 805
#researchlevel 0
#end
#selectspell 806
#researchlevel 0
#end
#selectspell 807
#researchlevel 0
#end
#selectspell 808
#researchlevel 0
#end
#selectspell 809
#researchlevel 0
#end
#selectspell 810
#researchlevel 0
#end
#selectspell 811
#researchlevel 0
#end
#selectspell 812
#researchlevel 0
#end
#selectspell 813
#researchlevel 0
#end
#selectspell 814
#researchlevel 0
#end
#selectspell 815
#researchlevel 0
#end
#selectspell 816
#researchlevel 0
#end
#selectspell 817
#researchlevel 0
#end
#selectspell 818
#researchlevel 0
#end
#selectspell 819
#researchlevel 0
#end
#selectspell 820
#researchlevel 0
#end
#selectspell 821
#researchlevel 0
#end
#selectspell 822
#researchlevel 0
#end
#selectspell 823
#researchlevel 0
#end
#selectspell 824
#researchlevel 0
#end
#selectspell 825
#researchlevel 0
#end
#selectspell 826
#researchlevel 0
#end
#selectspell 827
#researchlevel 0
#end
#selectspell 828
#researchlevel 0
#end
#selectspell 829
#researchlevel 0
#end
#selectspell 830
#researchlevel 0
#end
#selectspell 831
#researchlevel 0
#end
#selectspell 832
#researchlevel 0
#end
#selectspell 833
#researchlevel 0
#end
#selectspell 834
#researchlevel 0
#end
#selectspell 835
#researchlevel 0
#end
#selectspell 836
#researchlevel 0
#end
#selectspell 837
#researchlevel 0
#end
#selectspell 838
#researchlevel 0
#end
#selectspell 839
#researchlevel 0
#end
#selectspell 840
#researchlevel 0
#end
#selectspell 841
#researchlevel 0
#end
#selectspell 842
#researchlevel 0
#end
#selectspell 843
#researchlevel 0
#end
#selectspell 844
#researchlevel 0
#end
#selectspell 845
#researchlevel 0
#end
#selectspell 846
#researchlevel 0
#end
#selectspell 847
#researchlevel 0
#end
#selectspell 848
#researchlevel 0
#end
#selectspell 849
#researchlevel 0
#end
#selectspell 850
#researchlevel 0
#end
#selectspell 851
#researchlevel 0
#end
#selectspell 852
#researchlevel 0
#end
#selectspell 853
#researchlevel 0
#end
#selectspell 854
#researchlevel 0
#end
#selectspell 855
#researchlevel 0
#end
#selectspell 856
#researchlevel 0
#end
#selectspell 857
#researchlevel 0
#end
#selectspell 858
#researchlevel 0
#end
#selectspell 859
#researchlevel 0
#end
#selectspell 860
#researchlevel 0
#end
#selectspell 861
#researchlevel 0
#end
#selectspell 862
#researchlevel 0
#end
#selectspell 863
#researchlevel 0
#end
#selectspell 864
#researchlevel 0
#end
#selectspell 865
#researchlevel 0
#end
#selectspell 866
#researchlevel 0
#end
#selectspell 867
#researchlevel 0
#end
#selectspell 868
#researchlevel 0
#end
#selectspell 869
#researchlevel 0
#end
#selectspell 870
#researchlevel 0
#end
#selectspell 871
#researchlevel 0
#end
#selectspell 872
#researchlevel 0
#end
#selectspell 873
#researchlevel 0
#end
#selectspell 874
#researchlevel 0
#end
#selectspell 875
#researchlevel 0
#end
#selectspell 876
#researchlevel 0
#end
#selectspell 877
#researchlevel 0
#end
#selectspell 878
#researchlevel 0
#end
#selectspell 879
#researchlevel 0
#end
#selectspell 880
#researchlevel 0
#end
#selectspell 881
#researchlevel 0
#end
#selectspell 882
#researchlevel 0
#end
#selectspell 883
#researchlevel 0
#end
#selectspell 884
#researchlevel 0
#end
#selectspell 885
#researchlevel 0
#end
#selectspell 886
#researchlevel 0
#end
#selectspell 887
#researchlevel 0
#end
#selectspell 888
#researchlevel 0
#end
#selectspell 889
#researchlevel 0
#end
#selectspell 890
#researchlevel 0
#end
#selectspell 891
#researchlevel 0
#end
#selectspell 892
#researchlevel 0
#end
#selectspell 893
#researchlevel 0
#end
#selectspell 894
#researchlevel 0
#end
#selectspell 895
#researchlevel 0
#end
#selectspell 896
#researchlevel 0
#end
#selectspell 897
#researchlevel 0
#end
#selectspell 898
#researchlevel 0
#end
#selectspell 899
#researchlevel 0
#end
#selectspell 900
#researchlevel 0
#end
#selectspell 901
#researchlevel 0
#end
#selectspell 902
#researchlevel 0
#end
#selectspell 903
#researchlevel 0
#end
#selectspell 904
#researchlevel 0
#end
#selectspell 905
#researchlevel 0
#end
#selectspell 906
#researchlevel 0
#end
#selectspell 907
#researchlevel 0
#end
#selectspell 908
#researchlevel 0
#end
#selectspell 909
#researchlevel 0
#end
#selectspell 910
#researchlevel 0
#end
#selectspell 911
#researchlevel 0
#end
#selectspell 912
#researchlevel 0
#end
#selectspell 913
#researchlevel 0
#end
#selectspell 914
#researchlevel 0
#end
#selectspell 915
#researchlevel 0
#end
#selectspell 916
#researchlevel 0
#end
#selectspell 917
#researchlevel 0
#end
#selectspell 918
#researchlevel 0
#end
#selectspell 919
#researchlevel 0
#end
#selectspell 920
#researchlevel 0
#end
#selectspell 921
#researchlevel 0
#end
#selectspell 922
#researchlevel 0
#end
#selectspell 923
#researchlevel 0
#end
#selectspell 924
#researchlevel 0
#end
#selectspell 925
#researchlevel 0
#end
#selectspell 926
#researchlevel 0
#end
#selectspell 927
#researchlevel 0
#end
#selectspell 928
#researchlevel 0
#end
#selectspell 929
#researchlevel 0
#end
#selectspell 930
#researchlevel 0
#end
#selectspell 931
#researchlevel 0
#end
#selectspell 932
#researchlevel 0
#end
#selectspell 933
#researchlevel 0
#end
#selectspell 934
#researchlevel 0
#end
#selectspell 935
#researchlevel 0
#end
#selectspell 936
#researchlevel 0
#end
#selectspell 937
#researchlevel 0
#end
#selectspell 938
#researchlevel 0
#end
#selectspell 939
#researchlevel 0
#end
#selectspell 940
#researchlevel 0
#end
#selectspell 941
#researchlevel 0
#end
#selectspell 942
#researchlevel 0
#end
#selectspell 943
#researchlevel 0
#end
#selectspell 944
#researchlevel 0
#end
#selectspell 945
#researchlevel 0
#end
#selectspell 946
#researchlevel 0
#end
#selectspell 947
#researchlevel 0
#end
#selectspell 948
#researchlevel 0
#end
#selectspell 949
#researchlevel 0
#end
#selectspell 950
#researchlevel 0
#end
#selectspell 951
#researchlevel 0
#end
#selectspell 952
#researchlevel 0
#end
#selectspell 953
#researchlevel 0
#end
#selectspell 954
#researchlevel 0
#end
#selectspell 955
#researchlevel 0
#end
#selectspell 956
#researchlevel 0
#end
#selectspell 957
#researchlevel 0
#end
#selectspell 958
#researchlevel 0
#end
#selectspell 959
#researchlevel 0
#end
#selectspell 960
#researchlevel 0
#end
#selectspell 961
#researchlevel 0
#end
#selectspell 962
#researchlevel 0
#end
#selectspell 963
#researchlevel 0
#end
#selectspell 964
#researchlevel 0
#end
#selectspell 965
#researchlevel 0
#end
#selectspell 966
#researchlevel 0
#end
#selectspell 967
#researchlevel 0
#end
#selectspell 968
#researchlevel 0
#end
#selectspell 969
#researchlevel 0
#end
#selectspell 970
#researchlevel 0
#end
#selectspell 971
#researchlevel 0
#end
#selectspell 972
#researchlevel 0
#end
#selectspell 973
#researchlevel 0
#end
#selectspell 974
#researchlevel 0
#end
#selectspell 975
#researchlevel 0
#end
#selectspell 976
#researchlevel 0
#end
#selectspell 977
#researchlevel 0
#end
#selectspell 978
#researchlevel 0
#end
#selectspell 979
#researchlevel 0
#end
#selectspell 980
#researchlevel 0
#end
#selectspell 981
#researchlevel 0
#end
#selectspell 982
#researchlevel 0
#end
#selectspell 983
#researchlevel 0
#end
#selectspell 984
#researchlevel 0
#end
#selectspell 985
#researchlevel 0
#end
#selectspell 986
#researchlevel 0
#end
#selectspell 987
#researchlevel 0
#end
#selectspell 988
#researchlevel 0
#end
#selectspell 989
#researchlevel 0
#end
#selectspell 990
#researchlevel 0
#end
#selectspell 991
#researchlevel 0
#end
#selectspell 992
#researchlevel 0
#end
#selectspell 993
#researchlevel 0
#end
#selectspell 994
#researchlevel 0
#end
#selectspell 995
#researchlevel 0
#end
#selectspell 996
#researchlevel 0
#end
#selectspell 997
#researchlevel 0
#end
#selectspell 998
#researchlevel 0
#end
#selectspell 999
#researchlevel 0
#end
#selectspell 1000
#researchlevel 0
#end
#selectspell 1001
#researchlevel 0
#end
#selectspell 1002
#researchlevel 0
#end
#selectspell 1003
#researchlevel 0
#end
#selectspell 1004
#researchlevel 0
#end
#selectspell 1005
#researchlevel 0
#end
#selectspell 1006
#researchlevel 0
#end
#selectspell 1007
#researchlevel 0
#end
#selectspell 1008
#researchlevel 0
#end
#selectspell 1009
#researchlevel 0
#end
#selectspell 1010
#researchlevel 0
#end
#selectspell 1011
#researchlevel 0
#end
#selectspell 1012
#researchlevel 0
#end
#selectspell 1013
#researchlevel 0
#end
#selectspell 1014
#researchlevel 0
#end
#selectspell 1015
#researchlevel 0
#end
#selectspell 1016
#researchlevel 0
#end
#selectspell 1017
#researchlevel 0
#end
#selectspell 1018
#researchlevel 0
#end
#selectspell 1019
#researchlevel 0
#end
#selectspell 1020
#researchlevel 0
#end
#selectspell 1021
#researchlevel 0
#end
#selectspell 1022
#researchlevel 0
#end
#selectspell 1023
#researchlevel 0
#end
#selectspell 1024
#researchlevel 0
#end
#selectspell 1025
#researchlevel 0
#end
#selectspell 1026
#researchlevel 0
#end
#selectspell 1027
#researchlevel 0
#end
#selectspell 1028
#researchlevel 0
#end
#selectspell 1029
#researchlevel 0
#end
#selectspell 1030
#researchlevel 0
#end
#selectspell 1031
#researchlevel 0
#end
#selectspell 1032
#researchlevel 0
#end
#selectspell 1033
#researchlevel 0
#end
#selectspell 1034
#researchlevel 0
#end
#selectspell 1035
#researchlevel 0
#end
#selectspell 1036
#researchlevel 0
#end
#selectspell 1037
#researchlevel 0
#end
#selectspell 1038
#researchlevel 0
#end
#selectspell 1039
#researchlevel 0
#end
#selectspell 1040
#researchlevel 0
#end
#selectspell 1041
#researchlevel 0
#end
#selectspell 1042
#researchlevel 0
#end
#selectspell 1043
#researchlevel 0
#end
#selectspell 1044
#researchlevel 0
#end
#selectspell 1045
#researchlevel 0
#end
#selectspell 1046
#researchlevel 0
#end
#selectspell 1047
#researchlevel 0
#end
#selectspell 1048
#researchlevel 0
#end
#selectspell 1049
#researchlevel 0
#end
#selectspell 1050
#researchlevel 0
#end
#selectspell 1051
#researchlevel 0
#end
#selectspell 1052
#researchlevel 0
#end
#selectspell 1053
#researchlevel 0
#end
#selectspell 1054
#researchlevel 0
#end
#selectspell 1055
#researchlevel 0
#end
#selectspell 1056
#researchlevel 0
#end
#selectspell 1057
#researchlevel 0
#end
#selectspell 1058
#researchlevel 0
#end
#selectspell 1059
#researchlevel 0
#end
#selectspell 1060
#researchlevel 0
#end
#selectspell 1061
#researchlevel 0
#end
#selectspell 1062
#researchlevel 0
#end
#selectspell 1063
#researchlevel 0
#end
#selectspell 1064
#researchlevel 0
#end
#selectspell 1065
#researchlevel 0
#end
#selectspell 1066
#researchlevel 0
#end
#selectspell 1067
#researchlevel 0
#end
#selectspell 1068
#researchlevel 0
#end
#selectspell 1069
#researchlevel 0
#end
#selectspell 1070
#researchlevel 0
#end
#selectspell 1071
#researchlevel 0
#end
#selectspell 1072
#researchlevel 0
#end
#selectspell 1073
#researchlevel 0
#end
#selectspell 1074
#researchlevel 0
#end
#selectspell 1075
#researchlevel 0
#end
#selectspell 1076
#researchlevel 0
#end
#selectspell 1077
#researchlevel 0
#end
#selectspell 1078
#researchlevel 0
#end
#selectspell 1079
#researchlevel 0
#end
#selectspell 1080
#researchlevel 0
#end
#selectspell 1081
#researchlevel 0
#end
#selectspell 1082
#researchlevel 0
#end
#selectspell 1083
#researchlevel 0
#end
#selectspell 1084
#researchlevel 0
#end
#selectspell 1085
#researchlevel 0
#end
#selectspell 1086
#researchlevel 0
#end
#selectspell 1087
#researchlevel 0
#end
#selectspell 1088
#researchlevel 0
#end
#selectspell 1089
#researchlevel 0
#end
#selectspell 1090
#researchlevel 0
#end
#selectspell 1091
#researchlevel 0
#end
#selectspell 1092
#researchlevel 0
#end
#selectspell 1093
#researchlevel 0
#end
#selectspell 1094
#researchlevel 0
#end
#selectspell 1095
#researchlevel 0
#end
#selectspell 1096
#researchlevel 0
#end
#selectspell 1097
#researchlevel 0
#end
#selectspell 1098
#researchlevel 0
#end
#selectspell 1099
#researchlevel 0
#end
#selectspell 1100
#researchlevel 0
#end
#selectspell 1101
#researchlevel 0
#end
#selectspell 1102
#researchlevel 0
#end
#selectspell 1103
#researchlevel 0
#end
#selectspell 1104
#researchlevel 0
#end
#selectspell 1105
#researchlevel 0
#end
#selectspell 1106
#researchlevel 0
#end
#selectspell 1107
#researchlevel 0
#end
#selectspell 1108
#researchlevel 0
#end
#selectspell 1109 -- 3RS
#researchlevel 0
#end
#selectspell 1110
#researchlevel 0
#end
#selectspell 1111
#researchlevel 0
#end
#selectspell 1112
#researchlevel 0
#end
#selectspell 1113
#researchlevel 0
#end
#selectspell 1114
#researchlevel 0
#end
#selectspell 1115
#researchlevel 0
#end
#selectspell 1116
#researchlevel 0
#end
#selectspell 1117
#researchlevel 0
#end
#selectspell 1118
#researchlevel 0
#end
#selectspell 1119
#researchlevel 0
#end
#selectspell 1120
#researchlevel 0
#end
#selectspell 1121
#researchlevel 0
#end
#selectspell 1122
#researchlevel 0
#end
#selectspell 1123
#researchlevel 0
#end
#selectspell 1124
#researchlevel 0
#end
#selectspell 1125
#researchlevel 0
#end
#selectspell 1126
#researchlevel 0
#end
#selectspell 1127
#researchlevel 0
#end
#selectspell 1128
#researchlevel 0
#end
#selectspell 1129
#researchlevel 0
#end
#selectspell 1130
#researchlevel 0
#end
#selectspell 1131
#researchlevel 0
#end
#selectspell 1132
#researchlevel 0
#end
#selectspell 1133
#researchlevel 0
#end
#selectspell 1134
#researchlevel 0
#end
#selectspell 1135
#researchlevel 0
#end
#selectspell 1136
#researchlevel 0
#end
#selectspell 1137
#researchlevel 0
#end
#selectspell 1138
#researchlevel 0
#end
#selectspell 1139
#researchlevel 0
#end
#selectspell 1140
#researchlevel 0
#end
#selectspell 1141
#researchlevel 0
#end
#selectspell 1142
#researchlevel 0
#end
#selectspell 1143
#researchlevel 0
#end
#selectspell 1144
#researchlevel 0
#end
#selectspell 1145
#researchlevel 0
#end
#selectspell 1146
#researchlevel 0
#end
#selectspell 1147
#researchlevel 0
#end
#selectspell 1148
#researchlevel 0
#end
#selectspell 1149
#researchlevel 0
#end
#selectspell 1150
#researchlevel 0
#end
#selectspell 1151
#researchlevel 0
#end
#selectspell 1152
#researchlevel 0
#end
#selectspell 1153
#researchlevel 0
#end
#selectspell 1154
#researchlevel 0
#end
#selectspell 1155
#researchlevel 0
#end
#selectspell 1156
#researchlevel 0
#end
#selectspell 1157
#researchlevel 0
#end
#selectspell 1158
#researchlevel 0
#end
#selectspell 1159
#researchlevel 0
#end
#selectspell 1160
#researchlevel 0
#end
#selectspell 1161
#researchlevel 0
#end
#selectspell 1162
#researchlevel 0
#end
#selectspell 1163
#researchlevel 0
#end
#selectspell 1164
#researchlevel 0
#end
#selectspell 1165
#researchlevel 0
#end
#selectspell 1166
#researchlevel 0
#end
#selectspell 1167
#researchlevel 0
#end
#selectspell 1168
#researchlevel 0
#end
#selectspell 1169
#researchlevel 0
#end
#selectspell 1170
#researchlevel 0
#end
#selectspell 1171
#researchlevel 0
#end
#selectspell 1172
#researchlevel 0
#end
#selectspell 1173
#researchlevel 0
#end
#selectspell 1174
#researchlevel 0
#end
#selectspell 1175
#researchlevel 0
#end
#selectspell 1176
#researchlevel 0
#end
#selectspell 1177
#researchlevel 0
#end
#selectspell 1178
#researchlevel 0
#end
#selectspell 1179
#researchlevel 0
#end
#selectspell 1180
#researchlevel 0
#end
#selectspell 1181
#researchlevel 0
#end
#selectspell 1182
#researchlevel 0
#end
#selectspell 1183
#researchlevel 0
#end
#selectspell 1184
#researchlevel 0
#end
#selectspell 1185
#researchlevel 0
#end
#selectspell 1186
#researchlevel 0
#end
#selectspell 1187
#researchlevel 0
#end
#selectspell 1188
#researchlevel 0
#end
#selectspell 1189
#researchlevel 0
#end
#selectspell 1190
#researchlevel 0
#end
#selectspell 1191
#researchlevel 0
#end
#selectspell 1192
#researchlevel 0
#end
#selectspell 1193
#researchlevel 0
#end
#selectspell 1194
#researchlevel 0
#end
#selectspell 1195
#researchlevel 0
#end
#selectspell 1196
#researchlevel 0
#end
#selectspell 1197
#researchlevel 0
#end
#selectspell 1198
#researchlevel 0
#end
#selectspell 1199
#researchlevel 0
#end
#selectspell 1200
#researchlevel 0
#end
------
--Magic items to level 0
#selectitem 2
#constlevel 0
#end
#selectitem 3
#constlevel 0
#end
#selectitem 4
#constlevel 0
#end
#selectitem 5
#constlevel 0
#end
#selectitem 6
#constlevel 0
#end
#selectitem 7
#constlevel 0
#end
#selectitem 8
#constlevel 0
#end
#selectitem 9
#constlevel 0
#end
#selectitem 10
#constlevel 0
#end
#selectitem 11
#constlevel 0
#end
#selectitem 12
#constlevel 0
#end
#selectitem 13
#constlevel 0
#end
#selectitem 14
#constlevel 0
#end
#selectitem 15
#constlevel 0
#end
#selectitem 16
#constlevel 0
#end
#selectitem 17
#constlevel 0
#end
#selectitem 18
#constlevel 0
#end
#selectitem 19
#constlevel 0
#end
#selectitem 20
#constlevel 0
#end
#selectitem 21
#constlevel 0
#end
#selectitem 22
#constlevel 0
#end
#selectitem 23
#constlevel 0
#end
#selectitem 24
#constlevel 0
#end
#selectitem 25
#constlevel 0
#end
#selectitem 26
#constlevel 0
#end
#selectitem 27
#constlevel 0
#end
#selectitem 28
#constlevel 0
#end
#selectitem 29
#constlevel 0
#end
#selectitem 30
#constlevel 0
#end
#selectitem 31
#constlevel 0
#end
#selectitem 32
#constlevel 0
#end
#selectitem 33
#constlevel 0
#end
#selectitem 34
#constlevel 0
#end
#selectitem 35
#constlevel 0
#end
#selectitem 36
#constlevel 0
#end
#selectitem 37
#constlevel 0
#end
#selectitem 38
#constlevel 0
#end
#selectitem 39
#constlevel 0
#end
#selectitem 40
#constlevel 0
#end
#selectitem 41
#constlevel 0
#end
#selectitem 42
#constlevel 0
#end
#selectitem 43
#constlevel 0
#end
#selectitem 44
#constlevel 0
#end
#selectitem 45
#constlevel 0
#end
#selectitem 46
#constlevel 0
#end
#selectitem 47
#constlevel 0
#end
#selectitem 48
#constlevel 0
#end
#selectitem 49
#constlevel 0
#end
#selectitem 50
#constlevel 0
#end
#selectitem 51
#constlevel 0
#end
#selectitem 52
#constlevel 0
#end
#selectitem 53
#constlevel 0
#end
#selectitem 54
#constlevel 0
#end
#selectitem 55
#constlevel 0
#end
#selectitem 56
#constlevel 0
#end
#selectitem 57
#constlevel 0
#end
#selectitem 58
#constlevel 0
#end
#selectitem 59
#constlevel 0
#end
#selectitem 60
#constlevel 0
#end
#selectitem 61
#constlevel 0
#end
#selectitem 62
#constlevel 0
#end
#selectitem 63
#constlevel 0
#end
#selectitem 64
#constlevel 0
#end
#selectitem 65
#constlevel 0
#end
#selectitem 66
#constlevel 0
#end
#selectitem 67
#constlevel 0
#end
#selectitem 68
#constlevel 0
#end
#selectitem 69
#constlevel 0
#end
#selectitem 70
#constlevel 0
#end
#selectitem 71
#constlevel 0
#end
#selectitem 72
#constlevel 0
#end
#selectitem 73
#constlevel 0
#end
#selectitem 74
#constlevel 0
#end
#selectitem 75
#constlevel 0
#end
#selectitem 76
#constlevel 0
#end
#selectitem 77
#constlevel 0
#end
#selectitem 78
#constlevel 0
#end
#selectitem 79
#constlevel 0
#end
#selectitem 80
#constlevel 0
#end
#selectitem 81
#constlevel 0
#end
#selectitem 82
#constlevel 0
#end
#selectitem 83
#constlevel 0
#end
#selectitem 84
#constlevel 0
#end
#selectitem 85
#constlevel 0
#end
#selectitem 86
#constlevel 0
#end
#selectitem 87
#constlevel 0
#end
#selectitem 88
#constlevel 0
#end
#selectitem 89
#constlevel 0
#end
#selectitem 90
#constlevel 0
#end
#selectitem 91
#constlevel 0
#end
#selectitem 92
#constlevel 0
#end
#selectitem 93
#constlevel 0
#end
#selectitem 94
#constlevel 0
#end
#selectitem 95
#constlevel 0
#end
#selectitem 96
#constlevel 0
#end
#selectitem 97
#constlevel 0
#end
#selectitem 98
#constlevel 0
#end
#selectitem 99
#constlevel 0
#end
#selectitem 100
#constlevel 0
#end
#selectitem 101
#constlevel 0
#end
#selectitem 102
#constlevel 0
#end
#selectitem 103
#constlevel 0
#end
#selectitem 104
#constlevel 0
#end
#selectitem 105
#constlevel 0
#end
#selectitem 106
#constlevel 0
#end
#selectitem 107
#constlevel 0
#end
#selectitem 108
#constlevel 0
#end
#selectitem 109
#constlevel 0
#end
#selectitem 110
#constlevel 0
#end
#selectitem 111
#constlevel 0
#end
#selectitem 112
#constlevel 0
#end
#selectitem 113
#constlevel 0
#end
#selectitem 114
#constlevel 0
#end
#selectitem 115
#constlevel 0
#end
#selectitem 116
#constlevel 0
#end
#selectitem 117
#constlevel 0
#end
#selectitem 118
#constlevel 0
#end
#selectitem 119
#constlevel 0
#end
#selectitem 120
#constlevel 0
#end
#selectitem 121
#constlevel 0
#end
#selectitem 122
#constlevel 0
#end
#selectitem 123
#constlevel 0
#end
#selectitem 124
#constlevel 0
#end
#selectitem 125
#constlevel 0
#end
#selectitem 126
#constlevel 0
#end
#selectitem 127
#constlevel 0
#end
#selectitem 128
#constlevel 0
#end
#selectitem 129
#constlevel 0
#end
#selectitem 130
#constlevel 0
#end
#selectitem 131
#constlevel 0
#end
#selectitem 132
#constlevel 0
#end
#selectitem 133
#constlevel 0
#end
#selectitem 134
#constlevel 0
#end
#selectitem 135
#constlevel 0
#end
#selectitem 136
#constlevel 0
#end
#selectitem 137
#constlevel 0
#end
#selectitem 138
#constlevel 0
#end
#selectitem 139
#constlevel 0
#end
#selectitem 140
#constlevel 0
#end
#selectitem 141
#constlevel 0
#end
#selectitem 142
#constlevel 0
#end
#selectitem 143
#constlevel 0
#end
#selectitem 144
#constlevel 0
#end
#selectitem 145
#constlevel 0
#end
#selectitem 146
#constlevel 0
#end
#selectitem 147
#constlevel 0
#end
#selectitem 148
#constlevel 0
#end
#selectitem 149
#constlevel 0
#end
#selectitem 150
#constlevel 0
#end
#selectitem 151
#constlevel 0
#end
#selectitem 152
#constlevel 0
#end
#selectitem 153
#constlevel 0
#end
#selectitem 154
#constlevel 0
#end
#selectitem 155
#constlevel 0
#end
#selectitem 156
#constlevel 0
#end
#selectitem 157
#constlevel 0
#end
#selectitem 158
#constlevel 0
#end
#selectitem 159
#constlevel 0
#end
#selectitem 160
#constlevel 0
#end
#selectitem 161
#constlevel 0
#end
#selectitem 162
#constlevel 0
#end
#selectitem 163
#constlevel 0
#end
#selectitem 164
#constlevel 0
#end
#selectitem 165
#constlevel 0
#end
#selectitem 166
#constlevel 0
#end
#selectitem 167
#constlevel 0
#end
#selectitem 168
#constlevel 0
#end
#selectitem 169
#constlevel 0
#end
#selectitem 170
#constlevel 0
#end
#selectitem 171
#constlevel 0
#end
#selectitem 172
#constlevel 0
#end
#selectitem 173
#constlevel 0
#end
#selectitem 174
#constlevel 0
#end
#selectitem 175
#constlevel 0
#end
#selectitem 176
#constlevel 0
#end
#selectitem 177
#constlevel 0
#end
#selectitem 178
#constlevel 0
#end
#selectitem 179
#constlevel 0
#end
#selectitem 180
#constlevel 0
#end
#selectitem 181
#constlevel 0
#end
#selectitem 182
#constlevel 0
#end
#selectitem 183
#constlevel 0
#end
#selectitem 184
#constlevel 0
#end
#selectitem 185
#constlevel 0
#end
#selectitem 186
#constlevel 0
#end
#selectitem 187
#constlevel 0
#end
#selectitem 188
#constlevel 0
#end
#selectitem 189
#constlevel 0
#end
#selectitem 190
#constlevel 0
#end
#selectitem 191
#constlevel 0
#end
#selectitem 192
#constlevel 0
#end
#selectitem 193
#constlevel 0
#end
#selectitem 194
#constlevel 0
#end
#selectitem 195
#constlevel 0
#end
#selectitem 196
#constlevel 0
#end
#selectitem 197
#constlevel 0
#end
#selectitem 198
#constlevel 0
#end
#selectitem 199
#constlevel 0
#end
#selectitem 200
#constlevel 0
#end
#selectitem 201
#constlevel 0
#end
#selectitem 202
#constlevel 0
#end
#selectitem 203
#constlevel 0
#end
#selectitem 204
#constlevel 0
#end
#selectitem 205
#constlevel 0
#end
#selectitem 206
#constlevel 0
#end
#selectitem 207
#constlevel 0
#end
#selectitem 208
#constlevel 0
#end
#selectitem 209
#constlevel 0
#end
#selectitem 210
#constlevel 0
#end
#selectitem 211
#constlevel 0
#end
#selectitem 212
#constlevel 0
#end
#selectitem 213
#constlevel 0
#end
#selectitem 214
#constlevel 0
#end
#selectitem 215
#constlevel 0
#end
#selectitem 216
#constlevel 0
#end
#selectitem 217
#constlevel 0
#end
#selectitem 218
#constlevel 0
#end
#selectitem 219
#constlevel 0
#end
#selectitem 220
#constlevel 0
#end
#selectitem 221
#constlevel 0
#end
#selectitem 222
#constlevel 0
#end
#selectitem 223
#constlevel 0
#end
#selectitem 224
#constlevel 0
#end
#selectitem 225
#constlevel 0
#end
#selectitem 226
#constlevel 0
#end
#selectitem 227
#constlevel 0
#end
#selectitem 228
#constlevel 0
#end
#selectitem 229
#constlevel 0
#end
#selectitem 230
#constlevel 0
#end
#selectitem 231
#constlevel 0
#end
#selectitem 232
#constlevel 0
#end
#selectitem 233
#constlevel 0
#end
#selectitem 234
#constlevel 0
#end
#selectitem 235
#constlevel 0
#end
#selectitem 236
#constlevel 0
#end
#selectitem 237
#constlevel 0
#end
#selectitem 238
#constlevel 0
#end
#selectitem 239
#constlevel 0
#end
#selectitem 240
#constlevel 0
#end
#selectitem 241
#constlevel 0
#end
#selectitem 242
#constlevel 0
#end
#selectitem 243
#constlevel 0
#end
#selectitem 244
#constlevel 0
#end
#selectitem 245
#constlevel 0
#end
#selectitem 246
#constlevel 0
#end
#selectitem 247
#constlevel 0
#end
#selectitem 248
#constlevel 0
#end
#selectitem 249
#constlevel 0
#end
#selectitem 250
#constlevel 0
#end
#selectitem 251
#constlevel 0
#end
#selectitem 252
#constlevel 0
#end
#selectitem 253
#constlevel 0
#end
#selectitem 254
#constlevel 0
#end
#selectitem 255
#constlevel 0
#end
#selectitem 256
#constlevel 0
#end
#selectitem 257
#constlevel 0
#end
#selectitem 258
#constlevel 0
#end
#selectitem 259
#constlevel 0
#end
#selectitem 260
#constlevel 0
#end
#selectitem 261
#constlevel 0
#end
#selectitem 262
#constlevel 0
#end
#selectitem 263
#constlevel 0
#end
#selectitem 264
#constlevel 0
#end
#selectitem 265
#constlevel 0
#end
#selectitem 266
#constlevel 0
#end
#selectitem 267
#constlevel 0
#end
#selectitem 268
#constlevel 0
#end
#selectitem 269
#constlevel 0
#end
#selectitem 270
#constlevel 0
#end
#selectitem 271
#constlevel 0
#end
#selectitem 272
#constlevel 0
#end
#selectitem 273
#constlevel 0
#end
#selectitem 274
#constlevel 0
#end
#selectitem 275
#constlevel 0
#end
#selectitem 276
#constlevel 0
#end
#selectitem 277
#constlevel 0
#end
#selectitem 278
#constlevel 0
#end
#selectitem 279
#constlevel 0
#end
#selectitem 280
#constlevel 0
#end
#selectitem 281
#constlevel 0
#end
#selectitem 282
#constlevel 0
#end
#selectitem 283
#constlevel 0
#end
#selectitem 284
#constlevel 0
#end
#selectitem 285
#constlevel 0
#end
#selectitem 286
#constlevel 0
#end
#selectitem 287
#constlevel 0
#end
#selectitem 288
#constlevel 0
#end
#selectitem 289
#constlevel 0
#end
#selectitem 290
#constlevel 0
#end
#selectitem 291
#constlevel 0
#end
#selectitem 292
#constlevel 0
#end
#selectitem 293
#constlevel 0
#end
#selectitem 294
#constlevel 0
#end
#selectitem 295
#constlevel 0
#end
#selectitem 296
#constlevel 0
#end
#selectitem 297
#constlevel 0
#end
#selectitem 298
#constlevel 0
#end
#selectitem 299
#constlevel 0
#end
#selectitem 300
#constlevel 0
#end
#selectitem 301
#constlevel 0
#end
#selectitem 302
#constlevel 0
#end
#selectitem 303
#constlevel 0
#end
#selectitem 304
#constlevel 0
#end
#selectitem 305
#constlevel 0
#end
#selectitem 306
#constlevel 0
#end
#selectitem 307
#constlevel 0
#end
#selectitem 308
#constlevel 0
#end
#selectitem 309
#constlevel 0
#end
#selectitem 310
#constlevel 0
#end
#selectitem 311
#constlevel 0
#end
#selectitem 312
#constlevel 0
#end
#selectitem 313
#constlevel 0
#end
#selectitem 314
#constlevel 0
#end
#selectitem 315
#constlevel 0
#end
#selectitem 316
#constlevel 0
#end
#selectitem 317
#constlevel 0
#end
#selectitem 318
#constlevel 0
#end
#selectitem 319
#constlevel 0
#end
#selectitem 320
#constlevel 0
#end
#selectitem 321
#constlevel 0
#end
#selectitem 322
#constlevel 0
#end
#selectitem 323
#constlevel 0
#end
#selectitem 324
#constlevel 0
#end
#selectitem 325
#constlevel 0
#end
#selectitem 326
#constlevel 0
#end
#selectitem 327
#constlevel 0
#end
#selectitem 328
#constlevel 0
#end
#selectitem 329
#constlevel 0
#end
#selectitem 330
#constlevel 0
#end
#selectitem 331
#constlevel 0
#end
#selectitem 332
#constlevel 0
#end
#selectitem 333
#constlevel 0
#end
#selectitem 334
#constlevel 0
#end
#selectitem 335
#constlevel 0
#end
#selectitem 336
#constlevel 0
#end
#selectitem 337
#constlevel 0
#end
#selectitem 338
#constlevel 0
#end
#selectitem 339
#constlevel 0
#end
#selectitem 340
#constlevel 0
#end
#selectitem 341
#constlevel 0
#end
#selectitem 342
#constlevel 0
#end
#selectitem 343
#constlevel 0
#end
#selectitem 344
#constlevel 0
#end
#selectitem 345
#constlevel 0
#end
#selectitem 346
#constlevel 0
#end
#selectitem 347
#constlevel 0
#end
#selectitem 348
#constlevel 0
#end
#selectitem 349
#constlevel 0
#end
#selectitem 350
#constlevel 0
#end
#selectitem 351
#constlevel 0
#end
#selectitem 352
#constlevel 0
#end
#selectitem 353
#constlevel 0
#end
#selectitem 354
#constlevel 0
#end
#selectitem 355
#constlevel 0
#end
#selectitem 356
#constlevel 0
#end
#selectitem 357
#constlevel 0
#end
#selectitem 358
#constlevel 0
#end
#selectitem 359
#constlevel 0
#end
#selectitem 360
#constlevel 0
#end
#selectitem 361
#constlevel 0
#end
#selectitem 362
#constlevel 0
#end
#selectitem 363
#constlevel 0
#end
#selectitem 364
#constlevel 0
#end
#selectitem 365
#constlevel 0
#end
#selectitem 366
#constlevel 0
#end
#selectitem 367
#constlevel 0
#end
#selectitem 368
#constlevel 0
#end
#selectitem 369
#constlevel 0
#end
#selectitem 370
#constlevel 0
#end
#selectitem 371
#constlevel 0
#end
#selectitem 372
#constlevel 0
#end
#selectitem 373
#constlevel 0
#end
#selectitem 374
#constlevel 0
#end
#selectitem 375
#constlevel 0
#end
#selectitem 376
#constlevel 0
#end
#selectitem 377
#constlevel 0
#end
#selectitem 378
#constlevel 0
#end
#selectitem 379
#constlevel 0
#end
#selectitem 380
#constlevel 0
#end
#selectitem 381
#constlevel 0
#end
#selectitem 382
#constlevel 0
#end
#selectitem 383
#constlevel 0
#end
#selectitem 384
#constlevel 0
#end
#selectitem 385
#constlevel 0
#end
#selectitem 386
#constlevel 0
#end
#selectitem 387
#constlevel 0
#end
#selectitem 388
#constlevel 0
#end
#selectitem 389
#constlevel 0
#end
#selectitem 390
#constlevel 0
#end
#selectitem 391
#constlevel 0
#end
#selectitem 392
#constlevel 0
#end
#selectitem 393
#constlevel 0
#end
#selectitem 394
#constlevel 0
#end
#selectitem 395
#constlevel 0
#end
#selectitem 396
#constlevel 0
#end
#selectitem 397
#constlevel 0
#end
#selectitem 398
#constlevel 0
#end
#selectitem 399
#constlevel 0
#end
#selectitem 400
#constlevel 0
#end
#selectitem 401
#constlevel 0
#end
#selectitem 402
#constlevel 0
#end
#selectitem 403
#constlevel 0
#end
#selectitem 404
#constlevel 0
#end
#selectitem 405
#constlevel 0
#end
#selectitem 406
#constlevel 0
#end
#selectitem 407
#constlevel 0
#end
#selectitem 408
#constlevel 0
#end
#selectitem 409
#constlevel 0
#end
#selectitem 410
#constlevel 0
#end
#selectitem 411
#constlevel 0
#end
#selectitem 412
#constlevel 0
#end
#selectitem 413
#constlevel 0
#end
#selectitem 414
#constlevel 0
#end
#selectitem 415
#constlevel 0
#end
#selectitem 416
#constlevel 0
#end
#selectitem 417
#constlevel 0
#end
#selectitem 418
#constlevel 0
#end
#selectitem 419
#constlevel 0
#end
#selectitem 420
#constlevel 0
#end

#end