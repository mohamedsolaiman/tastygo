import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, Image, Pressable, Text, View, ScrollView} from "react-native";
import {images} from "@/constants";
import CartButton from "@/components/CartButton";
import CustomButton from "@/components/CustomButton";

const favoriteRestaurants = [
    {
        id: "1",
        name: "Burger Palace",
        image: images.burgerOne,
        rating: 4.8,
        deliveryTime: "25-35 min",
        cuisine: "American",
    },
    {
        id: "2",
        name: "Pizza Heaven",
        image: images.pizzaOne,
        rating: 4.6,
        deliveryTime: "30-40 min",
        cuisine: "Italian",
    },
    {
        id: "3",
        name: "Wrap Station",
        image: images.buritto,
        rating: 4.4,
        deliveryTime: "20-30 min",
        cuisine: "Mexican",
    },
    {
        id: "4",
        name: "Green Bowl Kitchen",
        image: images.salad,
        rating: 4.7,
        deliveryTime: "25-35 min",
        cuisine: "Healthy",
    },
    {
        id: "5",
        name: "Cheesy Delights",
        image: images.mozarellaSticks,
        rating: 4.3,
        deliveryTime: "15-25 min",
        cuisine: "Snacks",
    },
    {
        id: "6",
        name: "Sizzling Grill",
        image: images.burgerTwo,
        rating: 4.9,
        deliveryTime: "30-45 min",
        cuisine: "BBQ",
    },
];

const favoriteDishes = [
    {
        id: "1",
        name: "Classic Cheeseburger",
        image: images.burgerOne,
        price: 25.99,
        restaurant: "Burger Palace",
    },
    {
        id: "2",
        name: "Pepperoni Pizza",
        image: images.pizzaOne,
        price: 30.99,
        restaurant: "Pizza Heaven",
    },
    {
        id: "3",
        name: "Bean Burrito",
        image: images.buritto,
        price: 20.99,
        restaurant: "Wrap Station",
    },
    {
        id: "4",
        name: "Fresh Garden Salad",
        image: images.salad,
        price: 14.99,
        restaurant: "Green Bowl Kitchen",
    },
    {
        id: "5",
        name: "Crispy Fries",
        image: images.fries,
        price: 8.99,
        restaurant: "Cheesy Delights",
    },
    {
        id: "6",
        name: "BBQ Bacon Burger",
        image: images.burgerTwo,
        price: 27.50,
        restaurant: "Sizzling Grill",
    },
    {
        id: "7",
        name: "Onion Rings",
        image: images.onionRings,
        price: 9.50,
        restaurant: "Cheesy Delights",
    },
];

const FavoriteRestaurantCard = ({item}: {item: typeof favoriteRestaurants[0]}) => (
    <Pressable className="mr-4 w-44">
        <View className="w-44 h-28 rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center">
            <Image source={item.image} className="size-24" resizeMode="contain" />
        </View>
        <Text className="paragraph-bold text-dark-100 mt-2" numberOfLines={1}>{item.name}</Text>
        <View className="flex-row items-center gap-x-2 mt-1">
            <View className="flex-row items-center gap-x-0.5">
                <Image source={images.star} className="size-3" resizeMode="contain" />
                <Text className="body-regular text-gray-100">{item.rating}</Text>
            </View>
            <Text className="body-regular text-gray-100">·</Text>
            <Text className="body-regular text-gray-100">{item.deliveryTime}</Text>
        </View>
        <Text className="body-regular text-primary mt-0.5">{item.cuisine}</Text>
    </Pressable>
);

const FavoriteDishCard = ({item}: {item: typeof favoriteDishes[0]}) => (
    <View className="flex-row items-center bg-white rounded-xl p-3 mb-3 shadow-md shadow-dark-100/10">
        <View className="size-20 bg-primary/10 rounded-lg flex items-center justify-center">
            <Image source={item.image} className="size-16" resizeMode="contain" />
        </View>
        <View className="flex-1 ml-3">
            <Text className="base-bold text-dark-100" numberOfLines={1}>{item.name}</Text>
            <Text className="body-regular text-gray-100 mt-0.5">{item.restaurant}</Text>
            <Text className="paragraph-bold text-primary mt-1">${item.price.toFixed(2)}</Text>
        </View>
        <Pressable className="bg-primary/10 px-3 py-2 rounded-full">
            <Text className="small-bold text-primary">Add</Text>
        </Pressable>
    </View>
);

const Favorites = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32">
                {/* Header */}
                <View className="flex-between flex-row w-full px-5 my-5">
                    <View className="flex-start">
                        <Text className="small-bold uppercase text-primary">Your Favorites</Text>
                        <Text className="paragraph-bold text-dark-100 mt-0.5">Saved places & dishes</Text>
                    </View>
                    <CartButton />
                </View>

                {/* Favorite Restaurants Section */}
                <View className="px-5 mb-6">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="h3-bold text-dark-100">Favorite Restaurants</Text>
                        <Text className="body-medium text-primary">See All</Text>
                    </View>
                    <FlatList
                        data={favoriteRestaurants}
                        renderItem={({item}) => <FavoriteRestaurantCard item={item} />}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerClassName="pr-4"
                    />
                </View>

                {/* Favorite Dishes Section */}
                <View className="px-5">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="h3-bold text-dark-100">Favorite Dishes</Text>
                        <Text className="body-medium text-primary">See All</Text>
                    </View>
                    {favoriteDishes.map((item) => (
                        <FavoriteDishCard key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Favorites;
