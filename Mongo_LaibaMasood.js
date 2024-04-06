import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/library").then(()=>{
    console.log("Connection Established.....")
}).catch((err)=>{console.log(err)})

const BookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    author:String,
    yearOfPublish: Number,

  });

  const BooksList = new mongoose.model("bookList", BookSchema);
try{
    const Book1 = new BooksList({
        name: "To Kill a MockingBird",
        genre: "fiction",
        author: "Harper Lee",
        yearOfPublish: 1945,
      });

      Book1.save();
    }catch(err){
        console.log(err);
    }

//try{
    //     const Book2 = new BooksList({
    //         name: "The Kite Runner",
    //         genre: "fiction",
    //         author: "Khaled Husseini",
    //         yearOfPublish: 2016,
    //       });
    
    //       Book2.save();
    //     }catch(err){
    //         console.log(err);
    //     }

    const PatronsSchema = new mongoose.Schema({
        name: String,
        contact: String,
        libraryCardNo:Number,
        bookID: String,
    
      });
    
      const Patrons = new mongoose.model("Patronlist", PatronsSchema);

    try{
        const Patron1 = new Patrons({
            name: "Ali XYZ",
            contact: "03435567543",
            libraryCardNo:138,
            bookID: "65437680744d5320b9a4a1bd",
          });
    
          Patron1.save();
        }catch(err){
            console.log(err);
        }
 
//    const updateDocument = async (id) => {
//   try {
//     const result = await Patrons.updateOne({_id:id},{$set: {name:"ABC"}});
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   };
// }
// updateDocument('6544a7a857d9a3bb21863270'); // give object id

// // Update all documents where the "status" field is "pending" to have "processed" status
// await YourModel.updateMany({ status: "pending" }, { $set: { status: "processed" } });
// // Delete all documents where the "status" field is "inactive"
// await YourModel.deleteMany({ status: "inactive" });

const deleteDocument= async(id)=>{
try{
const result = await BooksList.deleteOne(
    {_id:id});
    console.log(result);
}catch(err){
    console.log(err);
}
}
 deleteDocument('65437680744d5320b9a4a1bd');



  