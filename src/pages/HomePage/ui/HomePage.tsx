import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { SimpleObjectCard } from "@entites/Object";
import { MainSearch } from "@features/SearchObjects";
import { Slider } from "@shared/ui/Slider";
const HomePage = () => {
  return (
    <Box bgColor={"blackAlpha.50"} py={12}>
      <main>
        <Heading
          color="blackAlpha.900"
          size={["2xl", "3xl"]}
          textAlign="center"
        >
          Ваш отдых начинается здесь
        </Heading>
        <Text
          color="blackAlpha.300"
          fontWeight={"bold"}
          textAlign="center"
          mt={"4"}
          fontSize={"larger"}
        >
          Квартиры, отели, гостевые дома — по Кыргызстану
        </Text>
        <MainSearch />
        {/* <Box>
          <Heading color="blackAlpha.900" size="xl" textAlign="center" mt={16}>
            Куда поехать
          </Heading>
          <Container maxW="container.xl">
            <SimpleGrid mt={"6"} minChildWidth="280px" spacing="40px">
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://invest.gov.kg/wp-content/uploads/2019/10/Balykchy2-1-1024x768.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Балыкчы
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://sputnik.kg/img/07e7/05/1f/1075806125_253:0:2582:1747_1920x0_80_0_0_1a84755e75883c80671af316bfbef484.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Чолпон-Ата
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://w-sail.com/wp-content/uploads/2022/09/bosteri.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Бостери
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://rosskurort.com/upload/iblock/7f5/102482460.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Тамчы
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://sputnik.kg/img/104024/34/1040243488_16:0:1891:1406_1400x0_80_0_0_e006daf1d8e61498ed4df575d6fd1912.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Тору-Айгыр
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://aff.bstatic.com/images/hotel/max500/728/72835530.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Чок-Тал
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://triptokyrgyzstan.com/sites/default/files/media/image/c_dmitrii_luzhanskii.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Орнок
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/0c/1b/caption.jpg?w=600&h=400&s=1"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"4"}
                      py={"6"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"lg"}>
                          Бактуу-Долоноту
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
            </SimpleGrid>
            <SimpleGrid mt={"6"} minChildWidth="160px" spacing="40px">
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://invest.gov.kg/wp-content/uploads/2019/10/Balykchy2-1-1024x768.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"2"}
                      py={"3"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} size={"sm"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"md"}>
                          Балыкчы
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://sputnik.kg/img/07e7/05/1f/1075806125_253:0:2582:1747_1920x0_80_0_0_1a84755e75883c80671af316bfbef484.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"2"}
                      py={"3"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} size="sm" variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"md"}>
                          Чолпон-Ата
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://w-sail.com/wp-content/uploads/2022/09/bosteri.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"2"}
                      py={"3"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} size={"sm"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"md"}>
                          Бостери
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://rosskurort.com/upload/iblock/7f5/102482460.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"2"}
                      py={"3"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag rounded={"full"} size="sm" variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading color="white" size={"md"}>
                          Тамчы
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://sputnik.kg/img/104024/34/1040243488_16:0:1891:1406_1400x0_80_0_0_e006daf1d8e61498ed4df575d6fd1912.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"2"}
                      py={"3"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag size={"sm"} rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading size="md" color="white">
                          Тору-Айгыр
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
              <Card data-group rounded={"2xl"}>
                <LinkOverlay href="#" h={"full"}>
                  <CardBody
                    overflow={"hidden"}
                    rounded={"2xl"}
                    padding={0}
                    position={"relative"}
                    h={"full"}
                  >
                    <Image
                      _groupHover={{
                        transform: "scale(1.1)",
                      }}
                      transition="0.3s all"
                      rounded={"2xl"}
                      w={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                      src="https://aff.bstatic.com/images/hotel/max500/728/72835530.jpg"
                    />

                    <Box
                      position="absolute"
                      top={0}
                      width={"100%"}
                      h={"100%"}
                      px={"2"}
                      py={"3"}
                    >
                      <VStack
                        h={"100%"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                      >
                        <Tag size="sm" rounded={"full"} variant="solid">
                          16 602 варианта
                        </Tag>
                        <Heading size="md" color="white">
                          Чок-Тал
                        </Heading>
                      </VStack>
                    </Box>
                  </CardBody>
                </LinkOverlay>
              </Card>
            </SimpleGrid>
          </Container>
        </Box> */}
        <Box mt={"6"}>
          <Heading color="blackAlpha.900" size="xl" textAlign="center" mt={16}>
            Популярные объекты
          </Heading>
          <Container maxW="container.xl">
            <Slider
              slidesPerView={4}
              breakpoint={{
                "@1.00": {
                  slidesPerView: 4,
                },
                "@0.90": {
                  slidesPerView: 3,
                },
                "@0.70": {
                  slidesPerView: 2,
                },
                "@0.40": {
                  slidesPerView: 1,
                },
              }}
            >
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
            </Slider>
          </Container>
        </Box>
        <Box mt={"6"}>
          <Heading color="blackAlpha.900" size="xl" textAlign="center" mt={16}>
            Определенно рекомендуем
          </Heading>
          <Container maxW="container.xl">
            <Slider
              slidesPerView={4}
              breakpoint={{
                "@1.00": {
                  slidesPerView: 4,
                },
                "@0.90": {
                  slidesPerView: 3,
                },
                "@0.70": {
                  slidesPerView: 2,
                },
                "@0.40": {
                  slidesPerView: 1,
                },
              }}
            >
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
              <SimpleObjectCard />
            </Slider>
          </Container>
        </Box>
        {/* <Box>
          <Heading color="blackAlpha.900" size="xl" textAlign="center" mt={16}>
            Отзывы
          </Heading>
          <Flex
            textAlign={"center"}
            justifyContent={"center"}
            direction={"column"}
            width={"full"}
            overflow={"hidden"}
            mt={4}
          >
            <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"10"} mx={"auto"}>
              {testimonials.map((cardInfo, index) => (
                <ReviewCard key={index} {...cardInfo} index={index} />
              ))}
            </SimpleGrid>
          </Flex>
        </Box> */}
      </main>
    </Box>
  );
};

export default HomePage;
