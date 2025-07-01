import {SafeAreaView} from "react-native-safe-area-context";
import {
    ScrollView,
    Image,
    Pressable,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {images} from "@/constants";
import CartButton from "@/components/CartButton";
import {useCartStore} from "@/store/cart.store";

const restaurantData: Record<string, {
    name: string;
    image: any;
    rating: number;
    reviewCount: number;
    deliveryTime: string;
    deliveryFee: string;
    cuisineTags: string[];
    menuCategories: string[];
    menuItems: {
        id: string;
        name: string;
        description: string;
        price: number;
        image: any;
        category: string;
        calories: number;
        popular?: boolean;
    }[];
}> = {
    "1": {
        name: "Burger Palace",
        image: images.burgerOne,
        rating: 4.8,
        reviewCount: 324,
        deliveryTime: "25-35 min",
        deliveryFee: "$2.99",
        cuisineTags: ["American", "Burgers", "Fast Food"],
        menuCategories: ["Popular", "Burgers", "Sides", "Drinks"],
        menuItems: [
            {
                id: "bp1",
                name: "Classic Cheeseburger",
                description: "Juicy beef patty with melted cheddar, fresh lettuce, tomato, and our secret sauce",
                price: 25.99,
                image: images.burgerOne,
                category: "Burgers",
                calories: 550,
                popular: true,
            },
            {
                id: "bp2",
                name: "BBQ Bacon Burger",
                description: "Smoky BBQ sauce, crispy bacon strips, aged cheddar on a brioche bun",
                price: 27.50,
                image: images.burgerTwo,
                category: "Burgers",
                calories: 650,
                popular: true,
            },
            {
                id: "bp3",
                name: "Double Patty Burger",
                description: "Two hand-pressed beef patties, double cheese, pickles, and caramelized onions",
                price: 32.99,
                image: images.burgerTwo,
                category: "Burgers",
                calories: 720,
            },
            {
                id: "bp4",
                name: "Crispy Fries",
                description: "Golden crispy fries seasoned with our signature spice blend",
                price: 8.99,
                image: images.fries,
                category: "Sides",
                calories: 320,
                popular: true,
            },
            {
                id: "bp5",
                name: "Onion Rings",
                description: "Beer-battered onion rings served with ranch dipping sauce",
                price: 9.50,
                image: images.onionRings,
                category: "Sides",
                calories: 380,
            },
            {
                id: "bp6",
                name: "Mozzarella Sticks",
                description: "Crispy-coated mozzarella sticks with marinara sauce",
                price: 10.99,
                image: images.mozarellaSticks,
                category: "Sides",
                calories: 410,
            },
            {
                id: "bp7",
                name: "Fresh Lemonade",
                description: "Hand-squeezed lemonade with a hint of mint",
                price: 5.99,
                image: images.salad,
                category: "Drinks",
                calories: 120,
            },
        ],
    },
    "2": {
        name: "Pizza Heaven",
        image: images.pizzaOne,
        rating: 4.6,
        reviewCount: 256,
        deliveryTime: "30-40 min",
        deliveryFee: "$3.49",
        cuisineTags: ["Italian", "Pizza", "Pasta"],
        menuCategories: ["Popular", "Pizzas", "Sides", "Desserts"],
        menuItems: [
            {
                id: "ph1",
                name: "Pepperoni Pizza",
                description: "Loaded with mozzarella cheese and premium pepperoni slices on our hand-tossed crust",
                price: 30.99,
                image: images.pizzaOne,
                category: "Pizzas",
                calories: 700,
                popular: true,
            },
            {
                id: "ph2",
                name: "Classic Margherita",
                description: "San Marzano tomatoes, fresh mozzarella, basil on a thin crispy crust",
                price: 26.99,
                image: images.pizzaOne,
                category: "Pizzas",
                calories: 590,
            },
            {
                id: "ph3",
                name: "Garlic Bread",
                description: "Toasted artisan bread with garlic butter and herbs",
                price: 7.99,
                image: images.onionRings,
                category: "Sides",
                calories: 280,
                popular: true,
            },
            {
                id: "ph4",
                name: "Caesar Salad",
                description: "Crisp romaine, parmesan, croutons with house-made Caesar dressing",
                price: 12.99,
                image: images.salad,
                category: "Sides",
                calories: 220,
            },
            {
                id: "ph5",
                name: "Choco Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
                price: 9.99,
                image: images.fries,
                category: "Desserts",
                calories: 450,
            },
        ],
    },
};

// Default restaurant data for any ID
const defaultRestaurant = restaurantData["1"];

const RestaurantDetail = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    const router = useRouter();
    const {addItem} = useCartStore();

    const restaurant = restaurantData[id || "1"] || defaultRestaurant;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32">
                {/* Header Image */}
                <View className="relative">
                    <View className="w-full h-56 bg-primary/10 flex items-center justify-center">
                        <Image source={restaurant.image} className="size-48" resizeMode="contain" />
                    </View>

                    {/* Back Button */}
                    <TouchableOpacity
                        className="absolute top-4 left-4 size-10 bg-white rounded-full flex items-center justify-center shadow-md"
                        onPress={() => router.back()}
                    >
                        <Image source={images.arrowBack} className="size-5" resizeMode="contain" />
                    </TouchableOpacity>

                    {/* Cart Button */}
                    <View className="absolute top-4 right-4">
                        <CartButton />
                    </View>
                </View>

                {/* Restaurant Info */}
                <View className="px-5 pt-5">
                    <Text className="h1-bold text-dark-100">{restaurant.name}</Text>
                    <View className="flex-row items-center gap-x-3 mt-2">
                        <View className="flex-row items-center gap-x-1">
                            <Image source={images.star} className="size-4" resizeMode="contain" />
                            <Text className="paragraph-bold text-dark-100">{restaurant.rating}</Text>
                            <Text className="body-regular text-gray-100">({restaurant.reviewCount} reviews)</Text>
                        </View>
                        <Text className="body-regular text-gray-100">·</Text>
                        <View className="flex-row items-center gap-x-1">
                            <Image source={images.clock} className="size-4" resizeMode="contain" />
                            <Text className="body-regular text-gray-100">{restaurant.deliveryTime}</Text>
                        </View>
                        <Text className="body-regular text-gray-100">·</Text>
                        <Text className="body-regular text-primary">{restaurant.deliveryFee} delivery</Text>
                    </View>

                    {/* Cuisine Tags */}
                    <View className="flex-row flex-wrap gap-2 mt-3">
                        {restaurant.cuisineTags.map((tag) => (
                            <View key={tag} className="bg-primary/10 px-3 py-1.5 rounded-full">
                                <Text className="small-bold text-primary">{tag}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Menu Categories Horizontal Scroll */}
                <View className="mt-5">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerClassName="px-5 gap-x-2"
                    >
                        {restaurant.menuCategories.map((cat, index) => (
                            <Pressable
                                key={cat}
                                className={`px-5 py-2.5 rounded-full ${
                                    index === 0 ? "bg-primary" : "bg-primary/10"
                                }`}
                            >
                                <Text
                                    className={`body-medium ${
                                        index === 0 ? "text-white" : "text-primary"
                                    }`}
                                >
                                    {cat}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>

                {/* Menu Items */}
                <View className="px-5 mt-5">
                    {restaurant.menuItems.map((item) => (
                        <View
                            key={item.id}
                            className="flex-row items-center bg-white rounded-xl p-3 mb-3 shadow-md shadow-dark-100/10"
                        >
                            <View className="size-24 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                                <Image source={item.image} className="size-20" resizeMode="contain" />
                            </View>
                            <View className="flex-1">
                                <View className="flex-row items-center gap-x-2">
                                    <Text className="base-bold text-dark-100" numberOfLines={1}>
                                        {item.name}
                                    </Text>
                                    {item.popular && (
                                        <View className="bg-success/10 px-2 py-0.5 rounded-full">
                                            <Text className="text-xs font-quicksand-bold text-success">
                                                Popular
                                            </Text>
                                        </View>
                                    )}
                                </View>
                                <Text className="body-regular text-gray-100 mt-0.5" numberOfLines={2}>
                                    {item.description}
                                </Text>
                                <View className="flex-row items-center justify-between mt-2">
                                    <View className="flex-row items-center gap-x-3">
                                        <Text className="paragraph-bold text-primary">
                                            ${item.price.toFixed(2)}
                                        </Text>
                                        <Text className="body-regular text-gray-100">
                                            {item.calories} cal
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            addItem({
                                                id: item.id,
                                                name: item.name,
                                                price: item.price,
                                                image_url: Image.resolveAssetSource(item.image).uri,
                                                customizations: [],
                                            })
                                        }
                                        className="bg-primary px-3 py-1.5 rounded-full"
                                    >
                                        <Text className="small-bold text-white">Add +</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RestaurantDetail;
